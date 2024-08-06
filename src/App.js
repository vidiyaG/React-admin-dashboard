import "./App.css";
import Header from "./pages/layout/Header";
import NavBar from "./pages/layout/Navbar";

import Dashboard from "../src/pages/dashboard/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { colorModeContext, tokens, useMode } from "./theme";
import { ThemeProvider, useTheme } from "@mui/material";
// d69d4
function App() {
    const [theme, colorMode] = useMode();
    const currentTheme = useTheme();
    const colors = tokens(currentTheme.palette.mode);
    return (
        <colorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header />
                    <div className="flex">
                        <NavBar />
                        <div className="flex-1">
                            <Routes>
                                <Route
                                    index
                                    path="/"
                                    element={<Dashboard />}
                                ></Route>
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </colorModeContext.Provider>
    );
}

export default App;
