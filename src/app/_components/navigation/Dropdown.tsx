'use client';

import type { Route } from '@/app/_types/route.types';
import Link from 'next/link';

type DropdownProps = {
  subRoutes: Route[];
  isLargeViewport: boolean;
  isOpenDropdown: boolean;
};

type DropdownItemProps = Route & {
  isLargeViewport: boolean;
};

const Dropdown = (props: DropdownProps) => {
  return (
    <ul>
      {props.subRoutes.map((item, index) => (
        <DropdownItem key={index} {...item} isLargeViewport={props.isLargeViewport} />
      ))}
    </ul>
  );
};

export default Dropdown;

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li>
      <Link href={props.path} className='flex items-center justify-between text-sm capitalize'>
        {props.title}
      </Link>
    </li>
  );
};
