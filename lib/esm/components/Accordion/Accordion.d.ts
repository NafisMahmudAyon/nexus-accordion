import React from "react";
interface AccordionProps {
    children: React.ReactNode;
    multiple?: boolean;
    defaultIndex?: number | number[];
    className?: string;
    activateOnLoad?: boolean;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
