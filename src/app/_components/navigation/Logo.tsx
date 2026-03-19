'use client';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link className='place-self-center' href='/'>
      <Image
        className='size-[50px] cursor-pointer invert'
        alt='Logo'
        width={50}
        height={50}
        priority
        src='/vercel.svg'
      />
    </Link>
  );
};

export default Logo;
