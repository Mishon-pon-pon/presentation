import React from "react";

import { LanguageFeature } from "fsd/features/LanguageFeature";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
}

export const WorkSpace = ({ children }: IProps) => {
  return (
    <div className="work_space">
      <LanguageFeature />
      <div className="container">{children}</div>
    </div>
  );
};
