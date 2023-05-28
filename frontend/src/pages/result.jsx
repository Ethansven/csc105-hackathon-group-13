import React from "react";
import VideoBG from "../assets/video/View.mp4";
import Navbar from "../components/navbar";
import Button from "@mui/material/Button";
import Axios from "../axiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [keepUser, setkeepUser] = useState();
  const [top, settop] = useState([]);

  const back = () => {
    navigate("/");
  };

  const getUser = async () => {
    const user = await Axios.get("/getUser");
    setkeepUser(user.data);
    console.log(user.data);
  };

  const getleaderboard = async () => {
    const leaderboard = await Axios.get("/leaderboard");
    settop(leaderboard.data.rows);
    console.log(top);
  };

  useEffect(() => {
    getUser();
    getleaderboard();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="result">
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={VideoBG} type="video/mp4" />
        </video>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              borderRadius: "20px",
              padding: "20px",
              margin: "0 auto",
              maxWidth: "800px",
              marginTop:"100px",
            }}
          >
            <h1>Your score is:</h1>
            <h1 style={{ fontSize: "40px" }}>{keepUser?.score}</h1>
            <h3 style={{ fontSize: "25px", color: "white" }}>
              Here are the top 10:
            </h3>
            {top.map((t, i) => (
              <p style={{ color: "white",fontSize:"18px" }}>
                {i + 1 + "."} {t?.username + " : "}
                {t?.score}
              </p>
            ))}
          </div>
        </div>
      </div>
      <Button
        sx={{
          position: "absolute",
          right: "60px",
          bottom: "40px",
          borderRadius: "20px",
          width: "120px",
          height: "50px",
        }}
        variant="contained"
        onClick={back}
      >
        Play Again
      </Button>
    </div>
  );
};

export default Result;
