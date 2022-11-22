import { cn } from "fsd/shared/utils/Cn";
import React from "react";
import "./index.scss";

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const MenuItem = ({ children, isActive }: IProps) => {
  return (
    <li className={cn("menu_item", { is_active: !!isActive })}>{children}</li>
  );
};
