import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFA500";
export const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
    background: {
      paper: `${arcBlue}`,
      card: "#ae7fe3",
      headingBox: "#d1e6e5",
    },
    white: {
      main: "#ffffff",
    },
  },
  typography: {
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    menuButtonFont: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    registerHereButton: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: "2.5rem",
      fontWeight: 700,
      color: `${arcBlue}`,
      lineHeight: "3.5rem",
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.25rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 800,
      color: `${arcBlue}`,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.25rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    h6: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 700,
      color: `${arcBlue}`,
    },
    body1: "span",
    body2: "span",
    cardTitle: {
      fontFamily: "Raleway",
      fontSize: "1.25rem",
      fontWeight: 700,
      color: `${arcOrange}`,
    },
  },
});
