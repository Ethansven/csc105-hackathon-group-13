import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import FishPic from "../assets/pic/pexels-kevin-burnell-15683563.jpg";
import Axios from "../axiosInstance";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Popup_Card = ({ closePopup, id }) => {
  const [answer, setanswer] = useState("");
  const [pla, setpla] = useState();

  // const [ans,setAns] =useState();
  const getfish = async () => {
    const fish = await Axios.get(`/fish/${id}`);
    setpla(fish.data);
    setanswer(fish.data.user_answer);
  };
  useEffect(() => {
    getfish();
  }, [id]);
  const save = async (event) => {
    event.preventDefault();
    await Axios.post(`/answer/${id}`, {
      answer: answer,
    });
    closePopup();
  };
  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <CloseIcon
        onClick={closePopup}
        fontSize="large"
        sx={{ position: "absolute", border: "none" }}
      />
      <form onSubmit={save}>
        <CardMedia
          component="img"
          height="300"
          image={pla?.img_url}
          alt="Card"
        />
        <CardContent>
          <TextField
            label="Enter an animal name"
            value={answer}
            variant="outlined"
            onChange={(event) => setanswer(event.target.value)}
            sx={{
              marginBottom: "20px",
              "& .MuiInputLabel-root": {
                color: "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "& input": {
                  color: "white",
                },
              },
            }}
          />
          <br />
          <Typography variant="body2" color="white">
            {pla?.detail}
          </Typography>
        </CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <button
            type="submit"
            style={{
              width: "30%",
              height: "30px",
              borderRadius: "20px",
              backgroundColor: "blue",
              border: "none",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            // onClick={closePopup}
          >
            Save
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Popup_Card;
