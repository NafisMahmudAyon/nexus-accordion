'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";
import { CloseIcon, OpenIcon } from "./Icons";
export const AccordionHeader = ({ children, className = "", activeStyle = "", iconStyle = "", closeIconStyle = "", openIconStyle = "", iconPosition = "right", iconEnable = true, openIcon = _jsx(OpenIcon, { className: `${iconStyle} ${openIconStyle}` }), closeIcon }) => {
    const { isActive, index, onChangeIndex } = useAccordion();
    return (_jsx(motion.div, { className: `${className} ${isActive ? activeStyle : ""}`, onClick: () => onChangeIndex(index), children: _jsxs("div", { className: `flex items-center justify-between ${iconPosition === "left" ? "flex-row-reverse" : ""}`, children: [children, iconEnable && (_jsx(motion.div, { initial: { rotate: 0, opacity: 0 }, animate: { rotate: 360, opacity: 1 }, exit: { rotate: 0, opacity: 0 }, transition: { duration: 0.3 }, className: `${iconStyle} ${isActive ? closeIconStyle : openIconStyle}`, children: isActive ? (_jsx(_Fragment, { children: closeIcon ? closeIcon : _jsx(CloseIcon, { className: `${iconStyle} ${closeIconStyle}` }) })) : (_jsx(_Fragment, { children: openIcon ? openIcon : _jsx(OpenIcon, { className: `${iconStyle} ${openIconStyle}` }) })) }, isActive ? "close" : "open"))] }) }));
};
