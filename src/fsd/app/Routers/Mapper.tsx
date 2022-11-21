import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTE_CONSTS } from "./RouteConsts";

export const Mapper = () => {
  return (
    <Routes>
      <Route element={<>Home</>} path={ROUTE_CONSTS.home.path} />
      <Route element={<>About me</>} path={ROUTE_CONSTS.about.path} />
      <Route element={<>SKILS</>} path={ROUTE_CONSTS.skils.path} />
      <Route element={<>Portfolio</>} path={ROUTE_CONSTS.portfolio.path} />
      <Route element={<>Contacts</>} path={ROUTE_CONSTS.contacts.path} />
    </Routes>
  );
};
