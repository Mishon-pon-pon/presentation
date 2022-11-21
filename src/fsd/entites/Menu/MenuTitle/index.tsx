import React from "react";

interface IProps {
  title: string;
}

export const MenuTitle = ({ title }: IProps) => {
  return <span>{title}</span>;
};
