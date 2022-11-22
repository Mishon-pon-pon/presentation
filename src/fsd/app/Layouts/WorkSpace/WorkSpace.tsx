import React from "react";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
}

export const WorkSpace = ({ children }: IProps) => {
  return (
    <div className="work_space">
      <div className="container">{children}</div>
    </div>
  );
};
