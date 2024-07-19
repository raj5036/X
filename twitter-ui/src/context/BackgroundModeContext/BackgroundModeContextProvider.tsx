import React, { PropsWithChildren, useState } from "react";
import BackgroundModeContext from "./BackgroundModeContext";
import { PaletteMode } from "@mui/material";

const BackgroundModeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [bgMode, setBgMode] = useState<PaletteMode>("light");

  return (
    <BackgroundModeContext.Provider value={{ bgMode, setBgMode }}>
      {children}
    </BackgroundModeContext.Provider>
  );
};

export default BackgroundModeContextProvider;
