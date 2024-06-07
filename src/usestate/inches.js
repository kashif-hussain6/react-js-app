import React, { useState } from 'react';

function    Change() {
  const [inches, setInches] = useState('');
  const [meters, setMeters] = useState(0);

  const handleConversion = (event) => {
    const inchesValue = event.target.value;
    setInches(inchesValue);

    const metersValue = inchesValue * 0.0254;
    setMeters(metersValue);
  };

  return (
    <div>
      <label>
        Inches:
        <input
          type="number"
          value={inches}
          onChange={handleConversion}
        />
      </label>
      <p>Meters: {meters}</p>
    </div>
  );
}

export default Change;
