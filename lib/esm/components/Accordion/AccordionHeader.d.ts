import React from "react";
interface AccordionHeaderProps {
    children: React.ReactNode;
    className?: string;
    activeStyle?: string;
    iconStyle?: string;
    openIconStyle?: string;
    closeIconStyle?: string;
    iconPosition?: "left" | "right";
    iconEnable?: boolean;
    closeIcon?: React.ReactNode;
    openIcon?: React.ReactNode;
}
export declare const AccordionHeader: React.FC<AccordionHeaderProps>;
export {};
