import { createTheme } from "@mui/material"; 
import { primary, neutralColor } from "./colors";
const theme = createTheme({
    palette: {
      primary: {
        main: primary,
        contrastText: "white"
      },
      text: {
        primary: neutralColor
      }, 
      banana: {
        main: '#000000'
      }
    }
  });
  export default theme 