import React from 'react';

export const DotBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`${className} absolute inset-0`}>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 opacity-50" />
      <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
    </div>
  );
};