import "../styles/globals.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#8A84E2",
    },
    secondary: {
      main: "#301E5D",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.7rem",
    },
    h3: {
      fontSize: "1.3rem",
    },
    h4: {
      fontSize: "1.1rem",
    },
    h5: {
      fontSize: "0.9rem",
    },
    h6: {
      fontSize: "0.7rem",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themeOptions}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
