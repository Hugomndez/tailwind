import { EN_Routes } from '@/app/_routes';
import Item from './Item';

const Items = () => {
  return (
    <div>
      <ul>
        {EN_Routes.map((route, idx) => (
          <Item key={idx} {...route} isOpenDropdown={false} isLargeViewport={true} idx={idx} />
        ))}
      </ul>
    </div>
  );
};

export default Items;
