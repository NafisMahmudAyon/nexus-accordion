'use client'
import React from "react";
import { motion } from "framer-motion";
import { useAccordion } from "./AccordionContext";
import { CloseIcon, OpenIcon } from "./Icons";

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

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  className = "",
  activeStyle = "",
  iconStyle = "",
  closeIconStyle = "",
  openIconStyle = "",
  iconPosition = "right",
  iconEnable = true,
  openIcon = <OpenIcon className={`${iconStyle} ${openIconStyle}`} />,
  closeIcon
}) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`${className} ${isActive ? activeStyle : ""} flex items-center justify-between ${iconPosition === "left" ? "flex-row-reverse" : ""} `}
      onClick={() => onChangeIndex(index)}
    >
      
        {children}
        {iconEnable && (
          <motion.div
            key={isActive ? "close" : "open"}
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            exit={{ rotate: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${iconStyle} ${isActive ? closeIconStyle : openIconStyle}`}
          >
            {isActive ? (<>{closeIcon ? closeIcon : <CloseIcon className={`${iconStyle} ${closeIconStyle}`} />}</>) : (<>{openIcon ? openIcon : <OpenIcon className={`${iconStyle} ${openIconStyle}`} />}</>)}
          </motion.div>
        )}
    </motion.div>
  );
};
