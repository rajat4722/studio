"use client";

import React, { useState, useEffect } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button, a'))) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  const outlineScale = isHovering ? 1.5 : 1;
  const dotScale = isHovering ? 0 : 1;

  return (
    <>
      <div
        className="cursor-outline"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${outlineScale})`,
          left: '-20px',
          top: '-20px',
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${dotScale})`,
          left: '-4px',
          top: '-4px',
          transition: 'transform 0.1s ease-out',
        }}
      />
    </>
  );
}
