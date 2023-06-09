import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Layout from "./scenes/layout";
import Dashboard from "./scenes/dashboard";
import Product from "./scenes/products";
import AddProduct from "./scenes/products/Add";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element = {<Layout/>}>
              <Route path= "/" element = {<Navigate to ="/dashboard"/>} replace />
              <Route path = "/dashboard" element = {<Dashboard />} />
              <Route path = "/products" element = {<Product/> } />
              <Route path = "/product/add" element = {<AddProduct/> } />
            </Route>  
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
