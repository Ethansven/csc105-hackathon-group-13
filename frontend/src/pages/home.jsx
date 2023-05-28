import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Navbar from "../components/navbar";
import VideoBG from "../assets/video/pexels-adrien-jacta-5358755-3840x2160-25fps.mp4";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import Axios from "../axiosInstance";
import Card from "../components/card.jsx";
import Fish_popup from "../components/fish_popup.jsx";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
const theme = createTheme();

export default function Home() {
  const navigate = useNavigate();
  const auth = async () => {
    try {
      const islog = await Axios.get("/getUser");
    } catch (error) {
      if (error instanceof AxiosError) {
        navigate("/login");
      }
    }
  };
  const [fish, setfish] = useState([]);
  const [currentFishId, setCurrentFishId] = useState(null);
  const allFish = Axios.get("/fish");
  useEffect(() => {
    auth();
    allFish.then((data) => {
      setfish(data.data);
    });
  }, []);
  const submit = async () => {
    const go = await Axios.post("/submit");
    navigate("/result")
  };
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
          // alignItems="center"
          justifyContent="center"
        >
          
            <Grid>
              <Navbar />
              <div style={{ display: "flex", flexDirection: "row",marginTop:"30px" }}>
                {fish.map((f) => (
                  <Card f={f} setCurrentFishId={setCurrentFishId} />
                ))}
              </div>
            </Grid>
            {currentFishId && (
              <Box sx={{ width: "30%", marginLeft: "-100px" }}>
                <Fish_popup
                  id={currentFishId}
                  closePopup={() => setCurrentFishId()}
                />
              </Box>
            )}
            <Button
              sx={{
                position: "absolute",
                right: "50px",
                bottom: "40px",
                borderRadius: "10px",
              }}
              variant="contained"
              color="success"
              onClick={submit}
            >
              Submit
            </Button>
         
        </Grid>
      </div>
    </ThemeProvider>
  );
}
