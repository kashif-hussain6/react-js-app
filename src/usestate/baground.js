import React, { useState } from 'react';

function BackgroundChanger() {
  const [color, setColor] = useState('white');
  const colors = ["yellow" ,"blue"]

  const handleClick = () => {
    setColor(prevColor => prevColor === 'white' ? 'lightblue' : 'white');
  };

  return (
    <div style={{ backgroundColor: color, padding: '20px' }}>
      <p>The background color is {color }</p>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
}

export default BackgroundChanger;
