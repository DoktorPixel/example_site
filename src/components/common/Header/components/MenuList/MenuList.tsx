import { SheetContent } from '@/components/ui';
import { Package2 } from 'lucide-react';

import { MenuListItem } from '../MenuListItem';
import { MENU } from '@/constants';

import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';

export const MenuList = () => {
  return (
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">labels.acme_inc</span>
        </Link>

        {MENU.map(({ label, link, icon }, index) => (
          <MenuListItem key={index} label={label} link={link} icon={icon} />
        ))}
      </nav>
    </SheetContent>
  );
};
