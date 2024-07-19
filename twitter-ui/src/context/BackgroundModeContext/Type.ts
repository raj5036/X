import { PaletteMode } from "@mui/material"

export interface BackgroundModeContextType {
	bgMode: PaletteMode
	setBgMode: React.Dispatch<React.SetStateAction<string>>
}