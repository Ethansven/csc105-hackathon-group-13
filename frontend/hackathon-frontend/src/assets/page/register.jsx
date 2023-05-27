import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BG from "../components/video/OceanBG.mp4";
import Logo from "../components/pic/FUNTIME.png";
import Axios from "../../axiosInstance";
import { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const theme = createTheme();

export default function SignInSide() {
  const [user,setuser]=useState();
  const [pass,setpass]=useState();
    const regis= async()=>{
      event.preventDefault();
      const user = await Axios.post("/regis",{
        username:user,
        password:pass
      });
      if (regis.data.success == true) {
        console.log("hi");
    }else {
      toast.error(regis.data.message);
    }
  }
  

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5}>
          <Paper
            elevation={6}
            sx={{
              my: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "30px",
              borderRadius: "20px",
              color:"white",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={regis}
              sx={{
                mt: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
                <img style={{width:"50%",padding:"5px"}} src={Logo} alt="logo" />
              <TextField
                margin="normal"
                required
                fullWidth
                value={user}
                label="Username"
                name="email"
                onChange={(e) => setuser(e.target.value)}
                sx={{
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  "& fieldset": { border: "none" },
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={pass}
                onChange={(e) => setpass(e.target.value)}
                sx={{
                  borderRadius: 8,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  marginTop: 4,
                  "& fieldset": { border: "none" },
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#50422C",
                  backgroundColor: "white",
                  borderRadius: 20,
                  padding: 2,
                  alignContent: "center",
                  width: "50%",
                  "&:hover": {
                    backgroundColor: "#C0C0C0",
                    color: "white",
                    boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Register
              </Button>
              <Grid container sx={{ marginTop: 3 }}>
                <Grid>
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      zIndex: -1,
                      textAlign: "center",
                    }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src={BG} type="video/mp4" />
                    </video>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
