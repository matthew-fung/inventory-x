import "../styles/globals.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: "#301E5D",
    },
    secondary: {
      main: "#8A84E2",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "1.8rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.1rem",
    },
    h5: {
      fontSize: "0.7rem",
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
