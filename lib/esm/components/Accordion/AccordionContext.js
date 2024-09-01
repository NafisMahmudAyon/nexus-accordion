'use client';
import { createContext, useContext } from "react";
export const AccordionContext = createContext(undefined);
export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordion must be used within an AccordionProvider");
    }
    return context;
};
