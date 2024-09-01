'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";
export const AccordionPanel = ({ children, className }) => {
    const { isActive } = useAccordion();
    return (_jsx(AnimatePresence, { initial: false, children: isActive && (_jsx(motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { type: "spring", duration: 0.4, bounce: 0 }, children: _jsx("div", { className: `${className}`, children: children }) })) }));
};
