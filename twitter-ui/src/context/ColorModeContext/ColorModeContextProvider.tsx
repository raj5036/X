import React, { PropsWithChildren, useState } from "react";
import ColorModeContext from "./ColorModeContext";

const ColorModeContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [colorMode, setColorMode] = useState<string>("light");

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
