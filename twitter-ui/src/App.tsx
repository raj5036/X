import { useContext } from "react"
// import Theme from "./utils/Theme"
// import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import ColorModeContext from "./context/ColorModeContext/ColorModeContext"
import { ColorModeContextType } from "./context/ColorModeContext/Types"
import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"

const App = () => {
  const { colorMode } = useContext(ColorModeContext) as ColorModeContextType
  
  console.log(colorMode);
  
  return (
        <RouterProvider router={router} />
  )
}

export default App
