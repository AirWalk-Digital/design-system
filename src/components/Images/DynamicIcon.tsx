"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-ff3b5aaa16/icons'

import { findIconDefinition, type IconLookup, type IconName, type IconPrefix, type IconProp, type SizeProp } from '@fortawesome/fontawesome-svg-core';


export type IconType = 'solid' | 'regular' | 'light' | 'duotone' | 'kit';

export interface DynamicIconProps {
  type?: IconType;
  iconName: string;
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  className?: string; 
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ type = 'solid', iconName = 'cloud', size = 'lg', className }) => {
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
    const icon = (iconPrefix: IconPrefix, iconName: IconName): IconProp => {
      if (isIconInLibrary(iconPrefix, iconName)) {
        return [iconPrefix, iconName] as IconProp;
      } else {
        return ['fas', 'exclamation-triangle'] as IconProp;
      }
    };


  return icon ? <FontAwesomeIcon icon={icon(iconPrefix as IconPrefix, iconName as IconName)} size={size as SizeProp} className={className} style={{height:'100%', width:'100%'}}/> : <FontAwesomeIcon icon={['fas', 'spinner']} spin size={size as SizeProp} className={className} style={{height:'100%', width:'100%'}}/>;
};

export default DynamicIcon;