import React, { ReactNode } from "react";

interface Props {
  styles: string;
  children?: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, onClick, styles }) => {
  return (
    <button onClick={onClick} className={`${styles}`}>
      {children}
    </button>
  );
};
