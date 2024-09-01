'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion, AnimatePresence } from "framer-motion";
import { useAccordion } from "./AccordionContext";
import { CloseIcon, OpenIcon } from "./Icons";
export const AccordionHeader = ({ children, className = "", activeStyle = "", iconStyle = "", closeIconStyle = "", openIconStyle = "", openIcon = _jsx(OpenIcon, { className: `${iconStyle} ${openIconStyle}` }), closeIcon = _jsx(CloseIcon, { className: `${iconStyle} ${closeIconStyle}` }) }) => {
    const { isActive, index, onChangeIndex } = useAccordion();
    return (_jsx(motion.div, { className: `${className} ${isActive ? activeStyle : ""}`, onClick: () => onChangeIndex(index), children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { children: children }), _jsx(AnimatePresence, { initial: false, children: isActive ? (_jsx(motion.div, { initial: { rotate: 0, opacity: 0 }, animate: { rotate: 180, opacity: 1 }, exit: { rotate: -90, opacity: 0 }, transition: { duration: 0.3 }, className: `${iconStyle} ${closeIconStyle}`, children: closeIcon }, "close")) : (_jsx(motion.div, { initial: { rotate: 0, opacity: 0 }, animate: { rotate: 180, opacity: 1 }, exit: { rotate: 90, opacity: 0 }, transition: { duration: 0.3 }, className: `${iconStyle} ${openIconStyle}`, children: openIcon }, "open")) })] }) }));
};
