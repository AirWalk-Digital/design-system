'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { byPrefixAndName } from '@awesome.me/kit-ff3b5aaa16/icons';

import { faCircleExclamation } from '@awesome.me/kit-ff3b5aaa16/icons/classic/light';

import {
  type IconLookup,
  type IconName,
  type IconPrefix,
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

const sizePx = (size: SizeProp): string => {
  switch (size) {
    case '2xs':
      return '6px';
    case 'xs':
      return '8px';
    case 'sm':
      return '12px';
    case 'lg':
      return '24px';
    case 'xl':
      return '48px';
    case '2xl':
      return '96px';
    case '1x':
      return '1rem';
    case '2x':
      return '2rem';
    case '3x':
      return '3rem';
    case '4x':
      return '4rem';
    case '5x':
      return '5rem';
    case '6x':
      return '6rem';
    case '7x':
      return '7rem';
    case '8x':
      return '8rem';
    case '9x':
      return '9rem';
    case '10x':
      return '10rem';
    default:
      return '24px';
  }
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({
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

  return faIcon ? (
    <FontAwesomeIcon
      icon={faIcon}
      size={size as SizeProp}
      className={className}
    />
  ) : (
    <FontAwesomeIcon
      icon={['fas', 'spinner']}
      spin
      size={size as SizeProp}
      className={className}
      style={{ width: sizePx(size as SizeProp) }}
    />
  );
};
