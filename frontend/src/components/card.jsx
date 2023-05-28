import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar";
import VideoBG from "../assets/video/pexels-adrien-jacta-5358755-3840x2160-25fps.mp4";
import Fish_popup from "../components/fish_popup";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
export default function Card({ f, setCurrentFishId }) {
  return (
    <div onClick={() => setCurrentFishId(f.id)}>
      <div key={f.id}>
        <img src={f.img_url} style={{ width: "60px", height: "60px" }} />
      </div>
    </div>
  );
}
