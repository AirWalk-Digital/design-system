import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface HeaderMenuItemProps {
  name: string;
  icon: React.ElementType; // Pass the component itself, not an instance
  description?: string;
  href: string;
}

export interface HeaderMenuProps {
  items?: HeaderMenuItemProps[];
  actions?: HeaderMenuItemProps[];
  name: string;
  href?: string;
}

const HeaderMenu = ({ name, items, actions = [], href }: HeaderMenuProps) => {

   if (!items && href) {
    return (
        <a href={href} className="text-sm/6 font-semibold text-gray-900">
            {name}
          </a>
    );
};
   return (
  <Popover>
    <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 outline-none">
      {name}
      <ChevronDownIcon
        aria-hidden="true"
        className="h-5 w-5 flex-none text-gray-400"
      />
    </PopoverButton>
    

    <PopoverPanel
      transition
      className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
    >
      {/* <div className="fixed top-14 inset-0 bg-black bg-opacity-50 -z-20" aria-hidden="true" /> */}
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8 z-50">
        {items && items.map((item) => (
          <div
            key={item.name}
            className="group relative rounded-lg p-6 text-sm/6 hover:bg-gray-50"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white group-hover:bg-gray-50">
              <item.icon
                aria-hidden="true"
                className="h-12 w-12 text-gray-600 group-hover:text-accent"
              />
            </div>
            <a
              href={item.href}
              className="mt-6 block font-semibold text-gray-900"
            >
              {item.name}
              <span className="absolute inset-0" />
            </a>
            <p className="mt-1 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {actions.length > 0 && (
        <div className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
              {actions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </PopoverPanel>
  </Popover>
)
};

export default HeaderMenu;