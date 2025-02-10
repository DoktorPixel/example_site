import { MENU } from '@/constants';
import { MenuListItem } from '../MenuListItem';

export const MenuList = () => {
  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        {MENU.map(({ label, link, icon }, index) => (
          <MenuListItem key={index} label={label} link={link} icon={icon} />
        ))}
      </nav>
    </div>
  );
};
