import React from "react";
import { ROUTE_CONSTS } from "fsd/app/Routers/RouteConsts";
import { Menu } from "fsd/entites/Menu";
import { MenuItem } from "fsd/entites/Menu/MenuItem";
import { MenuTitle } from "fsd/entites/Menu/MenuTitle";
import { NavigateFeature } from "fsd/features/Navigate";
import { useLocation } from "react-router-dom";

const MenuConfig = [
  {
    title: "Home",
    routerPath: ROUTE_CONSTS.home.path,
  },
  {
    title: "About me",
    routerPath: ROUTE_CONSTS.about.path,
  },
  {
    title: "Skils",
    routerPath: ROUTE_CONSTS.skils.path,
  },
  {
    title: "Portfolio",
    routerPath: ROUTE_CONSTS.portfolio.path,
  },
  {
    title: "Contacts",
    routerPath: ROUTE_CONSTS.contacts.path,
  },
];

export const MenuWidget = () => {
  const location = useLocation();
  return (
    <div>
      <Menu>
        {MenuConfig.map((item) => {
          return (
            <MenuItem
              isActive={item.routerPath === location.pathname}
              key={item.routerPath}
            >
              <NavigateFeature routePath={item.routerPath}>
                <MenuTitle title={item.title} />
              </NavigateFeature>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};
