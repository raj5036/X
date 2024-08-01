import { RouterProvider } from "react-router-dom"
import router from "./routes/routes"
import { useContext, useMemo } from "react"
import BackgroundModeContext from "./context/BackgroundModeContext/BackgroundModeContext"
import { BackgroundModeContextType } from "./context/BackgroundModeContext/Type"
import { createTheme, ThemeProvider } from "@mui/material"
import Theme from "./utils/Theme"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { config } from "./config/config"

const App = () => {
  const { bgMode } = useContext(BackgroundModeContext) as BackgroundModeContextType
  console.log(bgMode)

  const theme = useMemo(() => createTheme(Theme(bgMode)), [bgMode])

  return (
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId={config.GOOGLE_OAUTH.CLIENT_ID}>
        <RouterProvider router={router} />
        <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme.palette.mode}
            transition={Bounce}
        />
      </GoogleOAuthProvider>
    </ThemeProvider>
  )
}

export default App
