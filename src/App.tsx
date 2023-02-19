import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import HeroBanner from "./sections/HeroBanner";
import About from "./sections/About";
import Themes from "./sections/Themes";
import Schedule from "./sections/Schedule";
import Sponsors from "./sections/Sponsors";
import FAQ from "./sections/FAQ";
import SignupForm from "./sections/SignupForm/SignupForm";
import Socials from "./sections/Socials";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";

// Create Theme via Mui
const theme = createTheme({
  typography: {
    fontFamily: ["Fira Code", "monospace"].join(","),
  },
});

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="wrapper">
          <Header />
          <main>
            <HeroBanner />
            <About />
            <Themes />
            <Schedule />
            <Sponsors />
            <FAQ />
            <SignupForm />
            <Socials />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
