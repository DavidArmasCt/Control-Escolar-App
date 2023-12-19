import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import {mainTheme} from './mainTheme'

export const ThemeApp = ({children}) => {
  return (
    <ThemeProvider theme={mainTheme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}