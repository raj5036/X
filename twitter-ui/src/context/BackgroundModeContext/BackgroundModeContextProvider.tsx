import React, { PropsWithChildren, useState } from "react";
import BackgroundModeContext from "./BackgroundModeContext";

const BackgroundModeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [bgMode, setBgMode] = useState<string>("light");

  return (
    <BackgroundModeContext.Provider value={{ bgMode, setBgMode }}>
      {children}
    </BackgroundModeContext.Provider>
  );
};

export default BackgroundModeContextProvider;
