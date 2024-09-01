import * as React from "react"

interface IconsProps {
  className?: string;
  width?: number;
  height?: number;
}

export const OpenIcon: React.FC<IconsProps> = ({ className = "", width = 24, height = 24, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${className}`} {...props} > <path d="M23.2 12c0 1-.8 1.7-1.7 1.7h-19c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7h19c1 0 1.7.7 1.7 1.7" fill="currentColor" /></svg>
)

export const CloseIcon: React.FC<IconsProps> = ({ className = "", width = 24, height = 24, ...props }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`${className}`} {...props}><path d="M13.846 1.846A1.844 1.844 0 0 0 12 0a1.844 1.844 0 0 0-1.846 1.846v8.308H1.846A1.844 1.844 0 0 0 0 12c0 1.021.825 1.846 1.846 1.846h8.308v8.308c0 1.021.825 1.846 1.846 1.846a1.844 1.844 0 0 0 1.846-1.846v-8.308h8.308A1.844 1.844 0 0 0 24 12a1.844 1.844 0 0 0-1.846-1.846h-8.308z" fill="currentColor" /></svg>
)

