import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import { useContext, useMemo } from "react"
import BackgroundModeContext from "./context/BackgroundModeContext/BackgroundModeContext"
import { BackgroundModeContextType } from "./context/BackgroundModeContext/Type"
import { createTheme, ThemeProvider } from "@mui/material"
import Theme from "./utils/Theme"

const App = () => {
  const { bgMode } = useContext(BackgroundModeContext) as BackgroundModeContextType
  console.log(bgMode)

  const theme = useMemo(() => createTheme(Theme(bgMode)), [bgMode])

  return (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
