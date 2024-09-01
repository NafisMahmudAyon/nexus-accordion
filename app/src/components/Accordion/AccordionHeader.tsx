'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  openIcon = <OpenIcon className={`${iconStyle} ${openIconStyle}`} />,
  closeIcon = <CloseIcon className={`${iconStyle} ${closeIconStyle}`} />
}) => {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`${className} ${isActive ? activeStyle : ""}`}
      onClick={() => onChangeIndex(index)}
    >
      {iconPosition === "left" &&
        <AnimatePresence initial={false}>
          {isActive ? (
            <motion.div
              key="close"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${iconStyle} ${closeIconStyle}`}
            >
              {closeIcon}
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${iconStyle} ${openIconStyle}`}
            >
              {openIcon}
            </motion.div>
          )}
        </AnimatePresence>
      }
      {children}
      {iconPosition === "right" &&
        <AnimatePresence initial={false}>
          {isActive ? (
            <motion.div
              key="close"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${iconStyle} ${closeIconStyle}`}
            >
              {closeIcon}
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 180, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`${iconStyle} ${openIconStyle}`}
            >
              {openIcon}
            </motion.div>
          )}
        </AnimatePresence>
      }
    </motion.div>
  );
};
