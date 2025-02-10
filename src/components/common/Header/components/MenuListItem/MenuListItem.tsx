import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui';
import type { LucideIcon } from 'lucide-react';

interface MenuListItemProps {
  label: string;
  link: string;
  icon: LucideIcon;
  count?: number;
}

export const MenuListItem = (props: MenuListItemProps) => {

  const { label, link, icon: IconName, count } = props;

  const location = useLocation();
  const isActiveLink = location.pathname === link;

  return (
    <Link
      to={link}
      className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl 
        ${isActiveLink
          ? 'bg-muted px-3 py-2 text-foreground hover:text-foreground'
          : 'px-3 py-2 text-muted-foreground hover:text-foreground'
        }`}
    >
      <IconName className="h-5 w-5" />
      {label}
      {count && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {count}
        </Badge>
      )}
    </Link>
  );
};
