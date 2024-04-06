import { createTheme } from "@mui/system"
import { useMemo } from "react"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { themeSettings } from "./theme"
function App() {
  const theme= useMemo(() => createTheme(themeSettings), [])
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        hi
      </ThemeProvider>
    </div>
  )
}

export default App
