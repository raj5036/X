import { PropsWithChildren } from "react";
import BackgroundModeContextProvider from "./BackgroundModeContext/BackgroundModeContextProvider";
import ColorModeContextProvider from "./ColorModeContext/ColorModeContextProvider";

export const ContextProviders: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<BackgroundModeContextProvider>
			<ColorModeContextProvider>
				{children}
			</ColorModeContextProvider>
		</BackgroundModeContextProvider>
	)
}