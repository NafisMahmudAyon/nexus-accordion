'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";
export const AccordionHeader = ({ children, className = "", activeStyle = "" }) => {
    const { isActive, index, onChangeIndex } = useAccordion();
    return (_jsx(motion.div, { className: `${className} ${isActive ? activeStyle : ""}`, onClick: () => onChangeIndex(index), children: children }));
};
