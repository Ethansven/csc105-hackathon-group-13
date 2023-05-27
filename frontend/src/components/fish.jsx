import React from 'react';
import Fish from '../assets/pic/fish.svg'
import Popup_Card from '../assets/pic/pexels-kevin-burnell-15683563.jpg';
import { useState } from 'react';

const MyComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <img
        style={{ width: '20%', marginTop: 120 }}
        src={Fish}
        alt="My Image"
        onClick={openPopup}
      />
      {isPopupOpen && <Popup_Card closePopup={closePopup} />}
    </>
  );
};
export default MyComponent;
