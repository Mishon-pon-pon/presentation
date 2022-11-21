import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

interface IProps {
  routePath: string;
  children: React.ReactNode;
}

export const NavigateFeature = ({ routePath, children }: IProps) => {
  return (
    <Link className="navigation" to={routePath}>
      {children}
    </Link>
  );
};
