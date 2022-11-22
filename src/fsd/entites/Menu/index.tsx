import React from "react";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
}
export const Menu = ({ children }: IProps) => {
  return (
    <nav className="nav_menu">
      <ul className="menu">{children}</ul>
      <div className="menu_divider"></div>
    </nav>
  );
};
