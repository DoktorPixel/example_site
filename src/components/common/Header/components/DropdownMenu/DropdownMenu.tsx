import {
  DropdownMenu as DropdownMenuComponent,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui';
import { Button } from '@/components/ui';
import { CircleUser } from 'lucide-react';

export const DropdownMenu = () => {
  return (
    <DropdownMenuComponent>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem> Settings</DropdownMenuItem>
        <DropdownMenuItem> Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem> Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuComponent>
  );
};
