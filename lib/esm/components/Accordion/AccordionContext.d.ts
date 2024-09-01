interface AccordionContextProps {
    isActive: boolean;
    index: number;
    onChangeIndex: (index: number) => void;
    className?: string;
}
export declare const AccordionContext: import("react").Context<AccordionContextProps | undefined>;
export declare const useAccordion: () => AccordionContextProps;
export {};
