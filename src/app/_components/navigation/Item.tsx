'use client';

import type { Route } from '@/app/_types/route.types';
import Link from 'next/link';
import Dropdown from './Dropdown';

type ItemProps = Route & {
  isOpenDropdown: boolean;
  isLargeViewport: boolean;
  idx: number;
};

const Item = (props: ItemProps) => {
  const { subRoutes, path, title, isOpenDropdown, isLargeViewport } = props;

  return (
    <li>
      {subRoutes ? (
        <>
          <a>
            {title}
            <svg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
              <polyline
                fill='none'
                strokeWidth='1'
                points={isOpenDropdown ? '11 8.5 6 3.5 1 8.5' : '1 3.5 6 8.5 11 3.5'}
              />
            </svg>
          </a>
          <Dropdown subRoutes={subRoutes} isLargeViewport={isLargeViewport} isOpenDropdown={isOpenDropdown} />
        </>
      ) : (
        <Link href={path}>{title}</Link>
      )}
    </li>
  );
};

export default Item;
