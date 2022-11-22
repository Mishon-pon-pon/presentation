import React from "react";
import "./index.scss";

interface IProps {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: IProps) => {
  return <div className="base_layout">{children}</div>;
};
