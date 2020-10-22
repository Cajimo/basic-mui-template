import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React, { Fragment } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import theme from "./theme/BaseStyles";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Main />
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
