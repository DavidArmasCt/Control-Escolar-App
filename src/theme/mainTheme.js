import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';



export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#F5EBFF',
            light: '#d8c862'
        },
        error: {
            main: red.A400
        }
    }
})