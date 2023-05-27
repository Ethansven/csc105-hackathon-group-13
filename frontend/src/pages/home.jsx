import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar";
import Fish from "../components/fish";
import VideoBG from "../assets/video/pexels-adrien-jacta-5358755-3840x2160-25fps.mp4";
import Fish_popup from "../components/fish_popup";
import { Box } from "@mui/material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: "relative" }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={VideoBG} type="video/mp4" />
        </video>

        <Grid
          container
          component="main"
          sx={{ height: "100vh" }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid>
            <Navbar />
            <Fish />
            <form onSubmit={() => {}} style={{ marginTop: theme.spacing(2) }}>
              {/* Add your form fields here */}
            </form>
          </Grid>
          <Box sx={{width:"30%",marginLeft:"-450px"}}>
            <Fish_popup/>
          </Box>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
