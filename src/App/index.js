import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

import "./App.css";
import Router from "../routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
