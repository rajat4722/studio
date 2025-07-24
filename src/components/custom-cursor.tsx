"use client";

import React, { useState, useEffect } from 'react';

const TRAIL_LENGTH = 15;

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

const HSLToRGB = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1));
  return `rgb(${255 * f(0)}, ${255 * f(8)}, ${255 * f(4)})`;
};

export function CustomCursor() {
  const [points, setPoints] = useState(Array(TRAIL_LENGTH).fill({ x: -100, y: -100 }));
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('has-cursor');
    
    let animationFrameId: number;
    let lastMousePos = { x: -100, y: -100 };

    const onMouseMove = (e: MouseEvent) => {
      lastMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(true);
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setIsHovering(false);
      }
    };

    const updatePoints = () => {
      setPoints(prevPoints => {
        const newPoints = [...prevPoints];
        let leader = lastMousePos;
        newPoints.forEach((point, index) => {
          const newPoint = {
            x: lerp(point.x, leader.x, 0.25),
            y: lerp(point.y, leader.y, 0.25)
          };
          newPoints[index] = newPoint;
          leader = newPoint;
        });
        return newPoints;
      });
      animationFrameId = requestAnimationFrame(updatePoints);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    animationFrameId = requestAnimationFrame(updatePoints);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const startHue = 220; // Electric Blue
  const startSat = 100;
  const startLight = 60;
  
  const endHue = 270; // Neon Purple
  const endSat = 100;
  const endLight = 65;
  
  return (
    <>
      {points.map((point, index) => {
        const factor = 1 - index / TRAIL_LENGTH;
        const size = isHovering ? 25 * factor : 20 * factor;
        
        const hue = lerp(endHue, startHue, factor);
        const sat = lerp(endSat, startSat, factor);
        const light = lerp(endLight, startLight, factor);
        
        return (
          <div
            key={index}
            className="cursor-trail"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: HSLToRGB(hue, sat, light),
              opacity: factor * (isHovering ? 0.7 : 0.5),
              transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
            }}
          />
        );
      })}
    </>
  );
}
