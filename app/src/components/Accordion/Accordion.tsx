//Accordion.tsx
'use client'
import React, { useState, useEffect } from "react";
import { AccordionContext } from "./AccordionContext";

interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  defaultIndex?: number | number[];
  className?: string;
  activateOnLoad?: boolean; // New prop
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple = false,
  className = "",
  defaultIndex = multiple ? [] : -1,
  activateOnLoad = false // Default is false
}) => {
  const [activeIndex, setActiveIndex] = useState<number | number[]>(defaultIndex);

  useEffect(() => {
    if (activateOnLoad && defaultIndex !== -1) {
      setActiveIndex(defaultIndex);
    }
  }, [activateOnLoad, defaultIndex]);

  const onChangeIndex = (index: number) => {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (Array.isArray(currentActiveIndex) && currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return Array.isArray(currentActiveIndex) ? currentActiveIndex.concat(index) : [index];
    });
  };

  return (
    <div className={`${className}`}>
      {React.Children.map(children, (child, index) => {
        const isActive =
          multiple && Array.isArray(activeIndex)
            ? activeIndex.includes(index)
            : activeIndex === index;

        return (
          <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
            {child}
          </AccordionContext.Provider>
        );
      })}
    </div>
  );
};
