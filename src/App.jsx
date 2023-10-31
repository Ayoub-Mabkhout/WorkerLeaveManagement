import "./styles.css";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
// import Dashboard from "./pages/Dashboard";

// ... other imports ...
import theme from "./theme";
import AppBar from "./components/AppBar/AppBar";
import Drawer from "./components/Drawer/Drawer";
import Dashboard from "./pages/Dashboard";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const user = {
    firstName: "Ayoub",
    lastName: "Mabkhout",
    position: "Software Engineer",
    ssn: "BK703836",
    dob: new Date("2001-07-14").toLocaleDateString(),
    pictureUrl: "/images/ayoub.jpg"
  };

  const context = { user: user };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar open={open} toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <BrowserRouter>
          <Routes>
            {/* Assuming you will have a Login page */}
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/" element={<Dashboard context={context} />} />
            {/* Other routes will go here */}
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
