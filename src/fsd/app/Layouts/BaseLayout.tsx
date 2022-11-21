import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export const BaseLayout = ({ children }: IProps) => {
  return <div className="base_layout">{children}</div>;
};
