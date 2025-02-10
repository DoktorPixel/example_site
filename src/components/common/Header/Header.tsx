import { Button, Sheet, SheetTrigger } from '@/components/ui';
import { DropdownMenu, MenuList, ModeToggle } from './components';
import { Menu as MenuIcon } from 'lucide-react';

export const Header = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <MenuList />
      </Sheet>
      <div className="flex-1"></div>
      <div className="flex-2">
        <ModeToggle />
      </div>
      <div className="flex-2"></div>
      <DropdownMenu />
    </header>
  );
};
