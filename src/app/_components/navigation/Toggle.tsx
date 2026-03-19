const Toggle = () => {
  return (
    <div className='flex cursor-pointer items-center md:hidden'>
      <svg className='fill-current' width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
        <rect y='2' width='20' height='1'></rect>
        <rect y='9' width='20' height='1'></rect>
        <rect y='16' width='20' height='1'></rect>
      </svg>
      <small className='ms-[10px] text-[12px] leading-none tracking-[1px] uppercase'>menu</small>
    </div>
  );
};

export default Toggle;
