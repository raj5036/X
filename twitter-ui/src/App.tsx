import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import { useContext, useMemo } from "react"
import BackgroundModeContext from "./context/BackgroundModeContext/BackgroundModeContext"
import { BackgroundModeContextType } from "./context/BackgroundModeContext/Type"
import { createTheme, ThemeProvider } from "@mui/material"
import Theme from "./utils/Theme"
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const { bgMode } = useContext(BackgroundModeContext) as BackgroundModeContextType
  console.log(bgMode)

  const theme = useMemo(() => createTheme(Theme(bgMode)), [bgMode])

  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId="185616603109-puhovjb2bcord9aikkh9jv1slibsqbi3.apps.googleusercontent.com">
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}

export default App
