'use client';

import Link from 'next/link';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="site-container flex h-16 items-center justify-between">
        <BrandLogo href="/blog" />

        <div className="flex items-center gap-2">
          <NavigationMenu className="hidden sm:flex" align="end">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink render={<Link href="/blog" />} className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="sm:hidden"
            render={<Link href="/blog" />}
          >
            Blog
          </Button>
        </div>
      </nav>
    </header>
  );
}
