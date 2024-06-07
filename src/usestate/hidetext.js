import React, { useState } from 'react';

function ShowHideText() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    <div>
      {isVisible && <p>This text can be shown or hidden</p>}
      <button onClick={handleClick}>{isVisible ? 'Hide' : 'Show'} Text</button>
    </div>
  );
}

export default ShowHideText;
