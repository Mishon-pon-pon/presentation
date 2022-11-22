import React from "react";
import { Routes, Route } from "react-router-dom";
import { WorkSpace } from "../Layouts/WorkSpace/WorkSpace";
import { ROUTE_CONSTS } from "./RouteConsts";

export const Mapper = () => {
  return (
    <Routes>
      <Route
        element={<WorkSpace>Home</WorkSpace>}
        path={ROUTE_CONSTS.home.path}
      />
      <Route
        element={<WorkSpace>About me</WorkSpace>}
        path={ROUTE_CONSTS.about.path}
      />
      <Route
        element={<WorkSpace>SKILS</WorkSpace>}
        path={ROUTE_CONSTS.skils.path}
      />
      <Route
        element={<WorkSpace>Portfolio</WorkSpace>}
        path={ROUTE_CONSTS.portfolio.path}
      />
      <Route
        element={<WorkSpace>Contacts</WorkSpace>}
        path={ROUTE_CONSTS.contacts.path}
      />
    </Routes>
  );
};
