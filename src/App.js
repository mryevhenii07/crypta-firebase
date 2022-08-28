import React from "react";
import { ThemeProvider } from "./context/ThemeContext";

import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
