import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme({});
theme = responsiveFontSizes(theme);

theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "3rem",

      [theme.breakpoints.down("md")]: {
        fontSize: "2.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
      },
    },
    h2: {
      fontSize: "2.5rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    h3: {
      fontSize: "2rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8rem",
        fontWeight: "bold",
      },
    },
    h4: {
      fontSize: "1.5rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
        fontWeight: "bold",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.6rem",
      },
    },
    body1: {
      fontSize: "1rem",
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.6rem",
      },
    },
  },
  palette: {
    primary: {
      light: "#5ddef4",
      main: "#00acc1",
      dark: "#007c91",
    },
    secondary: {
      light: "#ffffff",
      main: "#fafafa",
      dark: "#c7c7c7",
    },
  },
});

export default theme;
