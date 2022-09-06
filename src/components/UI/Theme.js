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
      body: "#d1e6e5",
      detailBox: "#ae9ae9",
    },
    white: {
      main: "#ffffff",
    },
    divider: {
      light: "#ffffff",
      dark: "#000000",
    },
  },
  typography: {
    color: {
      white: "#ffffff",
    },
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
    rowData: {
      fontFamily: "Raleway",
      fontSize: "1rem",
      fontWeight: 500,
      color: "#ffffff",
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
  zIndex: {
    mobile_stepper: 1000,
    fab: 1050,
    speed_dial: 1050,
    app_bar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  shape: {
    detailBox: {
      borderRadius: 2,
      p: 2,
    },
    box: {
      borderRadius: 2,
    },
  },
});
