import { ThemeProvider } from "@emotion/react"
import BackgroundModeContextProvider from "./context/BackgroundModeContext/BackgroundModeContextProvider"
import ColorModeContextProvider from "./context/ColorModeContext/ColorModeContextProvider"
import Theme from "./utils/Theme"
import { CssBaseline } from "@mui/material"

const App = () => {
  return (
    <BackgroundModeContextProvider>
      <ColorModeContextProvider>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          App
        </ThemeProvider>
      </ColorModeContextProvider>
    </BackgroundModeContextProvider>
  )
}

export default App
