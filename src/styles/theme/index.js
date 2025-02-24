import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2a9461",
    },
    secondary: {
      main: "#4775d1",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
    },
    background: {
      default: "#f4f4f4",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "serif",
    h1: {
      fontSize: "2.5rem",
      color: "#2a9461",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "serif",
        },
        h1: {
          fontSize: "2.5rem",
          color: "#2a9461",
        },
        body1: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "1.2rem",
          padding: "10px 20px",
        },
        containedPrimary: {
          backgroundColor: "#2a9461",
          "&:hover": {
            backgroundColor: "#237a52",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "6px",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f4f4f4",
          margin: 0,
          padding: 0,
        },
        html: {
          fontSize: "100%",
        },
      },
    },
  },
});
