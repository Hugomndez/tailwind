import Items from './Items';
import Logo from './Logo';
import Toggle from './Toggle';

const Navbar = () => {
  return (
    <nav className='grid h-20 max-w-7xl min-w-2xs grid-cols-3 grid-rows-1 border border-red-400 px-5 select-none md:mx-auto md:grid-cols-[auto_auto_1fr]'>
      <Toggle />
      <Logo />
      <Items />
    </nav>
  );
};

export default Navbar;
