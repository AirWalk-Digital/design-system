"use client";
import React, { createContext, useEffect, useState, type ReactNode } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

type IconObject = {
    prefix: string;
    iconName: string;
    icon: [number, number, (number | string)[], string, string];
  };
type ByPrefixAndName = Record<string, Record<string, IconObject>>;

// Define the shape of the context
interface IconContextType {
  loaded: boolean;
  byPrefixAndName: ByPrefixAndName | null;
}

const IconContext = createContext<IconContextType | undefined>(undefined);

type IconProviderProps = {
  children: ReactNode;
};

// Add free icons to the library globally
library.add(fas, far);

const IconProvider: React.FC<IconProviderProps> = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [byPrefixAndName, setByPrefixAndName] = useState<ByPrefixAndName | null>(null);

  useEffect(() => {
    const loadIcons = async () => {
      try {
        // Add free icons globally
        library.add(fas, far);
        // Load kit icons dynamically if needed
        const { all, byPrefixAndName } = await import('@awesome.me/kit-ff3b5aaa16/icons');
        library.add(...all);
        setByPrefixAndName(byPrefixAndName as ByPrefixAndName);
      } catch (error) {
        console.warn('FontAwesome Pro icons not available. Using free icons.');
      }
      setLoaded(true);
    };

    loadIcons();
  }, []);

  return (
    <IconContext.Provider value={{ loaded, byPrefixAndName }}>
      {children}
    </IconContext.Provider>
  );
};

export { IconProvider, IconContext };