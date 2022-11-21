import { cn } from "fsd/shared/utils/Cn";
import React from "react";
import "./index.css";

interface IProps {
  children: React.ReactNode;
  isActive: boolean;
}

export const MenuItem = ({ children, isActive }: IProps) => {
  console.log("isActive", isActive);
  return (
    <li className={cn("menu_item", { ["is_active"]: isActive })}>{children}</li>
  );
};
