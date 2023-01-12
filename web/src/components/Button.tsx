import React from "react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  zIndex: string
}

export const Button: React.FC<Props> = ({ 
   border, 
   color, 
   children, 
   height, 
   onClick, 
   radius, 
   width,
   zIndex, 
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
        zIndex
      }}
    >
      {children}
    </button>
  );
};