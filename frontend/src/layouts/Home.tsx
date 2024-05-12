import { Link, useLocation, useNavigate } from 'react-router-dom';

import { PanelLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ROUTES } from '@/shared/constants/ROUTES';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
// import { ls } from '@/shared/utils/ls';

const sidebarLinks = [
  {
    logo: '/sidebar/play-circle.png',
    alt: 'Discovery',
    title: 'Discovery',
    to: '/',
  },
  {
    logo: '/sidebar/play-circle.png',
    alt: 'Discovery2',
    title: 'Discovery2',
    to: '/discovery2',
  },
];

interface Props {
  children: ReactNode;
}

export const HomeLayout = ({ children }: Props) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const handleOnLogout = () => {
    // ls.remove(COMMON.USER);
    navigate(ROUTES.AUTH.LOGIN);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-card">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-secondary sm:flex lg:w-[240px]">
        <nav className="flex flex-col items-center px-2 sm:py-5 ">
          <Link to="/dashboard" className="">
            <img
              src="/logo-only.png"
              alt="Logo"
              className="lg:hidden h-8 w-30"
            />
            <img
              src="/logo.jpg"
              alt="Logo"
              className="hidden lg:block h-8 w-30"
            />
          </Link>
          <TooltipProvider>
            <div className="space-y-1 mt-4 w-full lg:px-2">
              {sidebarLinks.map((link) => {
                return (
                  <Tooltip key={link.title}>
                    <TooltipTrigger asChild>
                      <Link
                        to={link.to}
                        className={`flex h-9 w-9 lg:w-full items-center justify-center  rounded-lg text-muted-foreground transition-colors hover:text-foreground lg:p-4 lg:space-x-4 lg:justify-start ${
                          link.to === pathname && 'bg-accent'
                        }`}
                      >
                        <div className="flex gap-2">
                          <img
                            src={link.logo}
                            alt={link.title}
                            className="h-6 w-6"
                          />
                          <p
                            className={`${
                              link.to === pathname && 'text-primary'
                            } hidden lg:flex`}
                          >
                            {link.title}
                          </p>
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.title}</TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </TooltipProvider>
        </nav>
      </aside>
      <div className="flex flex-col h-screen sm:pl-14 lg:pl-[240px]">
        <header className="sticky top-0 z-30 flex h-16 p-4 justify-between items-center gap-4  bg-secondary  sm:static  border-b border-muted sm:justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-secondary sm:max-w-xs">
              <nav className="grid  text-lg font-medium overflow-hidden">
                <Link to="/" className="mb-6">
                  <img src="/logo.jpg" alt="Logo" className="h-8 w-30" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <div className="space-y-2">
                  {sidebarLinks.map((link) => {
                    return (
                      <Link
                        key={link.title}
                        to={link.to}
                        className={`flex items-center gap-4 h-9 p-4 rounded-lg text-muted-foreground hover:text-foreground ${
                          pathname === link.to && 'bg-accent'
                        }`}
                      >
                        <img
                          src={link.logo}
                          alt={link.alt}
                          className="h-4 w-4"
                        />
                        <p
                          className={`text-sm ${
                            link.to === pathname && 'text-primary'
                          }`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img src="/profile.png" alt="UserProfile" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleOnLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 bg-secondary p-4 md:p-10 overflow-y-scroll w-full">
          {children}
          <Toaster />
        </main>
      </div>
    </div>
  );
};
