'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import HeaderMenu, { type HeaderMenuProps } from './HeaderMenu';

interface SimpleHeaderProps {
  title: string;
  logo?: string;
  menuItems: HeaderMenuProps[];
}

export default function SimpleHeader({ title, logo, menuItems }: SimpleHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set initial theme based on the presence of the 'data-mode' attribute on the root
    const currentTheme = document.documentElement.getAttribute('class');
    setIsDarkMode(currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('class', !isDarkMode ? 'dark' : 'light');
  };

  return (
    <header className="relative isolate z-10 bg-white h-14">
      <nav
        aria-label="Global"
        className="relative mx-auto flex items-center justify-between p-3 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 outline-none">
            <span className="sr-only">{title}</span>
            <img alt={title} src={logo} className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {menuItems.map((menu) => (
            <HeaderMenu key={menu.name} {...menu} />
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors duration-200 outline-none"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 outline-none">
              <span className="sr-only">Your Company</span>
              <img alt={title} src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 outline-none"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {menuItems.map((menu) => (
                  <DisclosureItem key={menu.name} {...menu} />
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

function DisclosureItem({ name, items, actions, href }: HeaderMenuProps) {
  if (!items && href) {
    return (
      <a
        href={href}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
      >
        {name}
      </a>
    );
  }
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
        {name}
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2">
        {items &&
          items.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </DisclosureButton>
          ))}
      </DisclosurePanel>
    </Disclosure>
  );
}