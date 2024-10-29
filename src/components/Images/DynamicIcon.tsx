import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition, type IconLookup, type IconName, type IconPrefix, type IconProp, type SizeProp } from '@fortawesome/fontawesome-svg-core';
import { IconContext } from './IconProvider'; // Import the IconProvider context

export type IconType = 'solid' | 'regular' | 'light' | 'duotone' | 'kit';


export interface DynamicIconProps {
  type?: IconType;
  iconName: string;
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  className?: string; 
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ type = 'solid', iconName = 'cloud', size = 'lg', className }) => {
  const [icon, setIcon] = useState<[string, string] | null>(null);
  const [error, setError] = useState(false);

  // Consume the icon context
  const iconContext = useContext(IconContext);

  if (!iconContext) {
    console.error('IconContext is undefined. Make sure you are using DynamicIcon within an IconProvider.');
    return null;
  }

  const { loaded, byPrefixAndName } = iconContext;

  useEffect(() => {
    if (!loaded) return;

    // Function to return the correct prefix based on the style
    const getIconPrefix = (type: IconType): string => {
      switch (type) {
        case 'solid':
          return 'fas'; // Free solid icons
        case 'regular':
          return 'far'; // Free regular icons
        case 'light':
          return 'fal'; // Pro light if available
        case 'duotone':
          return 'fad'; // Pro duotone if available
        case 'kit':
          return 'fak'; // Assuming 'fak' is the prefix for kit icons
        default:
          return 'fas';
      }
    };

    // Function to check if the icon exists in the library
    const isIconInLibrary = (prefix: IconPrefix, name: IconName): boolean => {
      const iconLookup: IconLookup = { prefix: prefix, iconName: name as IconName };
      if (byPrefixAndName) {
        return !!byPrefixAndName[prefix]?.[name];
      }
      const foundIcon = findIconDefinition(iconLookup);
      return foundIcon ? true : false;
    };

    const iconPrefix = getIconPrefix(type);
    const name = iconName as IconName;

    if (isIconInLibrary(iconPrefix as IconPrefix, name)) {
      setIcon([iconPrefix, name]);
      setError(false);
    } else {
      setIcon(null);
      setError(true);
    }
  }, [type, iconName, byPrefixAndName, loaded]);

  // Render a fallback icon in case of an error (invalid icon, etc.)
  if (error && loaded) {
    return <FontAwesomeIcon icon={['fas', 'exclamation-triangle']} size={size as SizeProp} className={className} style={{height:'100%', width:'100%'}} />;
  }

  return icon ? <FontAwesomeIcon icon={icon as IconProp} size={size as SizeProp} className={className} style={{height:'100%', width:'100%'}}/> : <FontAwesomeIcon icon={['fas', 'spinner']} spin size={size as SizeProp} className={className} style={{height:'100%', width:'100%'}}/>;
};

export default DynamicIcon;