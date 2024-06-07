import React, { useState } from 'react';

const SetBgColor = () => {
  const colors = ["red", "blue", "green"];
  const [bgColor, setBgColor] = useState(colors[1]); 
  

  const changeColor = () => {
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };

  return (
    <button onClick={changeColor} style={{ backgroundColor: bgColor }}>
      Change Color
    </button>
  );
};

export default SetBgColor;
