import React from 'react';

export default function ProgressBar({ progress, color }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-full h-1 bg-gray-200 rounded-full relative">
        <div
          className={`absolute top-0 left-0 h-full rounded-full`}
          style={{ width: `${progress}%`, backgroundColor: color }}
        ></div>
      </div>
      <span className="ml-2 text-white">{progress}%</span>
    </div>
  );
}
