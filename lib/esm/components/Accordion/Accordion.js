//Accordion.tsx
'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { AccordionContext } from "./AccordionContext";
export const Accordion = ({ children, multiple = false, className = "", defaultIndex = multiple ? [] : -1, activateOnLoad = false // Default is false
 }) => {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);
    useEffect(() => {
        if (activateOnLoad && defaultIndex !== -1) {
            setActiveIndex(defaultIndex);
        }
    }, [activateOnLoad, defaultIndex]);
    const onChangeIndex = (index) => {
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
    return (_jsx("div", { className: `${className}`, children: React.Children.map(children, (child, index) => {
            const isActive = multiple && Array.isArray(activeIndex)
                ? activeIndex.includes(index)
                : activeIndex === index;
            return (_jsx(AccordionContext.Provider, { value: { isActive, index, onChangeIndex }, children: child }));
        }) }));
};
