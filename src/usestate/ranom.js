import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState(generateRandomColor());

  function generateRandomColor () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  function handleClick() {
    setColor(generateRandomColor());
  }
  return (
    <div style={{ backgroundColor: color, padding:"100px" }}>
      {color}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default RandomColor;
