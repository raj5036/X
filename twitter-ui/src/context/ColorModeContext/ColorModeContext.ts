import React from "react"
import { ColorModeContextType } from "./Types"

const ColorModeContext = React.createContext<ColorModeContextType | null>(null)

export default ColorModeContext