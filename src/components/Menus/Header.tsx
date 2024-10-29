import React, { useEffect, useState } from 'react';
import { Bell, Settings, HelpCircle, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LayoutGrid from './grid-thin.svg'; // Import the SVG file
import { HeightIcon } from '@radix-ui/react-icons';

interface HeaderProps {
  title: string;
  subtitle?: string;
  color?: string;
  onToggleAppGrid?: () => void;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  onToggleAppGrid,
  color = 'primary',
}) => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  useEffect(() => {
    // Example effect: Log the title when it changes
    console.log(`Title changed to: ${title}`);
  }, [title]);
  return (
    <header
      className={`bg-${color} text-primary-foreground p-2 flex items-center justify-between`}
    >
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-primary-foreground"
          onClick={onToggleAppGrid}
        >
          <LayoutGrid
            className="text-primary-foreground"
            style={{ height: '90%', width: '90%' }}
          />{' '}
          {/* Set the SVG size */}
        </Button>
        {/* <span className="font-semibold text-lg text-primary-foreground">{title}</span> */}
        <span className="pr-12">{title}</span>
      </div>
      <div className="flex-grow mx-4">
        <Input
          type="text"
          placeholder="Search"
          className="w-full bg-primary-foreground/10 border-0 placeholder:text-primary-foreground/50"
        />
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-primary-foreground">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="text-primary-foreground">
          {loggedInUser?.name}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
