import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              gray: {
                  100: "#e0e0e0",
                  200: "#c2c2c2",
                  300: "#a3a3a3",
                  400: "#858585",
                  500: "#666666",
                  600: "#525252",
                  700: "#3d3d3d",
                  800: "#292929",
                  900: "#141414",
              },
              primary: {
                  100: "#d0d1d5",
                  200: "#a1a4ab",
                  300: "#727681",
                  400: "#434957",
                  500: "#141b2d",
                  600: "#101624",
                  700: "#0c101b",
                  800: "#080b12",
                  900: "#040509",
              },
              greenAccent: {
                  100: "#dbf5ee",
                  200: "#b7ebde",
                  300: "#94e2cd",
                  400: "#70d8bd",
                  500: "#4cceac",
                  600: "#3da58a",
                  700: "#2e7c67",
                  800: "#1e5245",
                  900: "#0f2922",
              },
              redAccent: {
                  100: "#f8dcd9",
                  200: "#f1b9b3",
                  300: "#e9958d",
                  400: "#e27267",
                  500: "#db4f41",
                  600: "#af3f34",
                  700: "#832f27",
                  800: "#58201a",
                  900: "#2c100d",
              },
              blueEccent: {
                  100: "#e1e2fc",
                  200: "#c3c6f9",
                  300: "#a4a9f7",
                  400: "#868df4",
                  500: "#6870f1",
                  600: "#535ac1",
                  700: "#3e4391",
                  800: "#2a2d60",
                  900: "#151630",
              },
          }
        : {
              gray: {
                  100: "#141414",
                  200: "#292929",
                  300: "#3d3d3d",
                  400: "#525252",
                  500: "#666666",
                  600: "#858585",
                  700: "#a3a2a0",
                  800: "#e8e8e8",
                  900: "#e0e0e0",
              },
              primary: {
                  100: "#040509",
                  200: "#080b12",
                  300: "#0c101b",
                  400: "#525252",
                  500: "#141b2d",
                  600: "#434957",
                  700: "#727681",
                  800: "#a1a4ab",
                  900: "#d0d1d5",
              },
              greenAccent: {
                  100: "#0f2922",
                  200: "#1e5245",
                  300: "#2e7c67",
                  400: "#3da58a",
                  500: "#4cceac",
                  600: "#70d8bd",
                  700: "#94e2cd",
                  800: "#b7ebde",
                  900: "#dbf5ee",
              },
              redAccent: {
                  100: "#2c100d",
                  200: "#58201a",
                  300: "#832f27",
                  400: "#af3f34",
                  500: "#db4f41",
                  600: "#e27267",
                  700: "#e9958d",
                  800: "#f1b9b3",
                  900: "#f8dcd9",
              },
              blueAccent: {
                  100: "#151630",
                  200: "#2a2d60",
                  300: "#3e4391",
                  400: "#535ac1",
                  500: "#6870f1",
                  600: "#868df4",
                  700: "#a4a9f7",
                  800: "#c3c6f9",
                  900: "#e1e2fc",
              },
          }),
});

export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode == "dark"
                ? {
                      primary: { main: colors.primary[500] },
                      secondary: { main: colors.greenAccent[500] },
                      neutral: {
                          dark: colors.gray[700],
                          main: colors.gray[500],
                          light: colors.gray[100],
                      },
                      background: {
                          default: colors.primary[500],
                      },
                  }
                : {
                      primary: { main: colors.primary[100] },
                      secondary: { main: colors.greenAccent[500] },
                      neutral: {
                          dark: colors.gray[700],
                          main: colors.gray[500],
                          light: colors.gray[100],
                      },
                      background: {
                          default: "#fcfcfc",
                      },
                  }),
        },
        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 40,
                fontWeight: "bold",
                lineHeight: 2,
            },
            h2: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 32,
                fontWeight: "bold",
                lineHeight: 2,
            },
            h3: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight: "bolder",
                lineHeight: 2,
            },
            h4: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight: "bolder",
                lineHeight: 2,
            },
            h5: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
                lineHeight: 1,
            },
            h6: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 14,
                lineHeight: 1,
            },
        },
    };
};

//context for color
export const colorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => {
                    return prev == "dark" ? "light" : "dark";
                }),
        }),
        [mode]
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};
