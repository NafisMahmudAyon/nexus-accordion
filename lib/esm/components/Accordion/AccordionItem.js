import { jsx as _jsx } from "react/jsx-runtime";
export const AccordionItem = ({ children, className = "" }) => {
    return _jsx("div", { className: `${className}`, children: children });
};
