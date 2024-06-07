import React, { useState } from 'react';

function NumberDoubler() {
  const [number, setNumber] = useState(1);

  const handleClick = () => {
    setNumber(prevNumber => prevNumber * 2);
  };

  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={handleClick}>Double Number</button>
    </div>
  );
}

export default NumberDoubler;
