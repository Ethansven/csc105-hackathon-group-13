import React from 'react';
import { Card, CardContent, CardMedia, TextField, Typography } from '@mui/material';
import FishPic from '../assets/pic/pexels-kevin-burnell-15683563.jpg';

const Popup_Card = ({ closePopup }) => {
  return (
    <Card sx={{ borderRadius: "20px", boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', backgroundColor: "rgba(0,0,0,0.3)" }}>
      <CardMedia
        component="img"
        height="300"
        image={FishPic}
        alt="Card"
      />
      <CardContent>
        <TextField
          label="Enter your input"
          variant="outlined"
          sx={{
            marginBottom: '20px',
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '& input': {
                color: 'white',
              },
            },
          }}
        />
        <br />
        <Typography variant="body2" color="white">
          The sea creatures live in tropical, subtropical,
          and temperate ocean waters across the globe. “Manta” means blanket or cloak in Spanish,
          describing the look of the animals’ large, flat, diamond-shaped bodies,
          which are characterized by triangular pectoral fins.
          Manta rays have two horn-shaped fins protruding from the front of their heads,
          which has also given them the nickname “devil fish.”
        </Typography>
      </CardContent>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <button
          style={{
            width: "30%",
            height: "30px",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "none",
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
            color: "white",
            '&:hover': {
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
          }}
          onClick={closePopup}
        >
          Submit
        </button>
      </div>
    </Card>
  );
}

export default Popup_Card;
