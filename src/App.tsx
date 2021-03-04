import React, { useState } from "react";
import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";
import { CalculatorProvider } from "./context/CalculatorContext";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

function App() {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <CalculatorProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header toggleTheme={toggleTheme} />
          <Calculator />
        </div>
      </ThemeProvider>
    </CalculatorProvider>
  );
}

export default App;
