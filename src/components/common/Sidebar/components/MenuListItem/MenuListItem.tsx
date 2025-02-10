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
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all 
      ${
        isActiveLink
          ? 'bg-muted text-primary'
          : 'text-muted-foreground hover:text-primary'
      }`}
    >
      <IconName className="h-4 w-4" />
      {label}
      {count && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {count}
        </Badge>
      )}
    </Link>
  );
};
