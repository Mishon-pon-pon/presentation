import React, { useState } from "react";

import { cn } from "fsd/shared/utils/Cn";
import "./index.scss";

export const LanguageFeature = () => {
  const [active, setActive] = useState("ru");

  return (
    <div className="lang_fch">
      <button
        onClick={() => {
          setActive("ru");
        }}
        className={cn("lang_fch__item", { lang_active: active === "ru" })}
      >
        ru
      </button>
      |
      <button
        onClick={() => {
          setActive("eng");
        }}
        className={cn("lang_fch__item", { lang_active: active === "eng" })}
      >
        eng
      </button>
    </div>
  );
};
