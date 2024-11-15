'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-ff3b5aaa16/icons';

import { faCircleExclamation } from '@awesome.me/kit-ff3b5aaa16/icons/classic/light';

import {
  type Icon,
  type IconLookup,
  type IconName,
  type IconPrefix,
  type IconProp,
  type SizeProp,
} from '@fortawesome/fontawesome-svg-core';

export type IconType =
  | 'solid'
  | 'regular'
  | 'light'
  | 'duotone'
  | 'kit'
  | 'brands';

export interface DynamicIconProps {
  type?: IconType;
  iconName: string;
  size?:
    | '2xs'
    | 'xs'
    | 'sm'
    | 'lg'
    | 'xl'
    | '2xl'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  className?: string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({
  type = 'solid',
  iconName = 'cloud',
  size = 'lg',
  className,
}) => {
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
      case 'brands':
        return 'fab'; // Assuming 'fak' is the prefix for kit icons
      default:
        return 'fas';
    }
  };

  // Function to check if the icon exists in the library
  const getIcon = (prefix: IconPrefix, name: IconName): IconLookup => {
    const icon = byPrefixAndName[prefix]?.[name];
    if (icon) {
      return icon;
    } else {
      if (byPrefixAndName.fal) {
        return byPrefixAndName.fal['circle-exclamation']
          ? byPrefixAndName.fal['circle-exclamation']
          : faCircleExclamation;
      } else {
        return faCircleExclamation;
      }
    }
  };

  const iconPrefix = getIconPrefix(type);
  const faIcon = getIcon(iconPrefix as IconPrefix, iconName as IconName);
  // const icon = (iconPrefix: IconPrefix, iconName: IconName): IconProp => {
  //   if (isIconInLibrary(iconPrefix, iconName)) {
  //     return [iconPrefix, iconName] as IconProp;
  //   } else {
  //     return ['fas', 'exclamation-triangle'] as IconProp;
  //   }
  // };

  return faIcon ? (
    <FontAwesomeIcon
      icon={faIcon}
      size={size as SizeProp}
      className={className}
      style={{ height: '1rem', width: '1rem' }}
    />
  ) : (
    <FontAwesomeIcon
      icon={['fas', 'spinner']}
      spin
      size={size as SizeProp}
      className={className}
      style={{ height: '1rem', width: '1rem' }}
    />
  );
};

export default DynamicIcon;
