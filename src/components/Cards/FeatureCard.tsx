
import DynamicIcon from '../images/DynamicIcon';
import React from 'react';

export type FeatureCardProps = {
    title: string
    description: string
    iconName: string
    iconStyle: 'solid' | 'regular' | 'light' | 'duotone' | 'kit'
    color: 'green' | 'blue' | 'navy'
  }
  
 export const FeatureCard = ({ title, description, iconName, iconStyle, color }: FeatureCardProps) => {

    const colorClasses = {
      green: 'bg-green-500',
      blue: 'bg-blue-400',
      navy: 'bg-navy-700',
    }
  
    return (
      <div className={`rounded-3xl ${colorClasses[color]} p-6 flex flex-col items-center text-center`}>
        <div className="w-12 h-12 " >
        <DynamicIcon style={iconStyle} iconName={iconName} className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white text-sm">{description}</p>
      </div>
    )
  }