import React from 'react';
import DynamicIcon from '../images/DynamicIcon';

const AppLauncher = ({ apps }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Applications</h2>
      <div className="grid grid-cols-4 gap-4">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-50 transition"
          >
            <div className="h-12 w-12 mb-2">
            <DynamicIcon
              style={app.style}
              iconName={app.icon}
              className="h-full w-full"

            />
            </div>
            <span className="text-center text-sm font-medium">{app.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppLauncher;