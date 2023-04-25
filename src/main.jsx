import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { theme } from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
    <CssBaseline />
  </ThemeProvider>
);
