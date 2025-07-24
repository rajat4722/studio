import React from 'react';

const dots = [
  { cx: 20, cy: 40, key: 'na' }, // North America
  { cx: 45, cy: 35, key: 'eu' }, // Europe
  { cx: 65, cy: 45, key: 'as' }, // Asia
  { cx: 25, cy: 65, key: 'sa' }, // South America
  { cx: 48, cy: 60, key: 'af' }, // Africa
  { cx: 80, cy: 75, key: 'au' }, // Australia
  { cx: 5, cy: 15, key: 'gl' }, // Greenland
];

const WorldMap = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto max-h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="stroke-primary/50 stroke-[0.5] fill-primary/20"
          d="M 50,0 L 47.55,6.13 L 42.81,4.76 L 41.69,11.23 L 35.36,9.55 L 34.64,16.14 L 28.69,14.76 L 27.57,21.23 L 21.23,19.55 L 20.52,26.14 L 14.56,24.76 L 13.45,31.23 L 7.11,29.55 L 6.39,36.14 L 0,38 L 6.39,39.86 L 7.11,46.45 L 13.45,44.77 L 14.56,51.24 L 20.52,49.86 L 21.23,56.45 L 27.57,54.77 L 28.69,61.24 L 34.64,59.86 L 35.36,66.45 L 41.69,64.77 L 42.81,71.24 L 47.55,69.86 L 50,76 L 52.45,69.86 L 57.19,71.24 L 58.31,64.77 L 64.64,66.45 L 65.36,59.86 L 71.31,61.24 L 72.43,54.77 L 78.77,56.45 L 79.48,49.86 L 85.44,51.24 L 86.55,44.77 L 92.89,46.45 L 93.61,39.86 L 100,38 L 93.61,36.14 L 92.89,29.55 L 86.55,31.23 L 85.44,24.76 L 79.48,26.14 L 78.77,19.55 L 72.43,21.23 L 71.31,14.76 L 65.36,16.14 L 64.64,9.55 L 58.31,11.23 L 57.19,4.76 L 52.45,6.13 L 50,0 Z
 M 49.8,19.8 C 51.5,21.9 52.5,24.5 52.5,27.3 C 52.5,32.3 49.3,36.6 44.7,38.2 C 43.1,38.7 41.5,39 40,39 C 38.5,39 36.9,38.7 35.3,38.2 C 30.7,36.6 27.5,32.3 27.5,27.3 C 27.5,24.5 28.5,21.9 30.2,19.8 L 40,29 L 49.8,19.8 Z"
        />
        {dots.map((dot, i) => (
          <circle
            key={dot.key}
            cx={dot.cx}
            cy={dot.cy}
            r="1.5"
            className="fill-primary animate-pulse-glow"
            style={{ animationDelay: `${i * 300}ms` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;
