"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Add class to html tag to indicate custom cursor is active
    document.documentElement.classList.add('has-cursor');

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setHoveredElement(target.closest('a, button'));
      }
    };
    
    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a, button')) {
        setHoveredElement(null);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.documentElement.classList.remove('has-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);
  
  const getCursorStyle = () => {
    if (hoveredElement) {
      const rect = hoveredElement.getBoundingClientRect();
      return {
        width: `${rect.width + 8}px`,
        height: `${rect.height + 8}px`,
        transform: `translate(${rect.left - 4}px, ${rect.top - 4}px)`,
        borderRadius: window.getComputedStyle(hoveredElement).borderRadius,
        backgroundColor: 'hsla(var(--primary), 0.2)',
      };
    }
    return {};
  };

  const getDotStyle = () => {
    if (hoveredElement) {
      return {
        width: '0px',
        height: '0px',
        transform: `translate(${position.x}px, ${position.y}px)`,
      };
    }
    return {
      transform: `translate(${position.x}px, ${position.y}px)`,
    };
  };

  return (
    <>
      <div
        className="cursor-outline"
        style={{
          ...getCursorStyle(),
          left: 0,
          top: 0,
          transform: hoveredElement ? getCursorStyle().transform : `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          ...getDotStyle(),
          left: 0,
          top: 0,
        }}
      />
    </>
  );
}
