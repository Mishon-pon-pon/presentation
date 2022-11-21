import React, { useRef, useState } from "react";
import { BaseLayout } from "./Layouts/BaseLayout";
import { Bootstrap } from "./Bootstrap";
import "./index.css";
import "normalize.css";
import { MenuWidget } from "fsd/widgets/MenuWidget";
import { useEffect } from "react";
import { Mapper } from "./Routers/Mapper";
import { BrowserRouter as Router } from "react-router-dom";

export const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Bootstrap().init(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Router>
      <BaseLayout>
        <MenuWidget />
        <Mapper />
      </BaseLayout>
    </Router>
  );
};
