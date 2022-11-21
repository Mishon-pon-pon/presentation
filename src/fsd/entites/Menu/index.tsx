import React from "react";
import "./index.css";

interface IProps {
  children: React.ReactNode;
}
export const Menu = ({ children }: IProps) => {
  return (
    <nav className="navigation">
      <ul className="menu">{children}</ul>
    </nav>
  );
};
