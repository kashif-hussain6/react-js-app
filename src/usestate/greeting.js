import React, { useState } from 'react';

function GreetingToggler() {
  const [greeting, setGreeting] = useState('Hello!');

  const handleClick = () => {
    setGreeting(prevGreeting => prevGreeting === 'Hello!' ? 'Goodbye!' : 'Hello!');
  };

  return (
    <div>
      <p>{greeting}</p>
      <button onClick={handleClick}>Toggle Greeting</button>
    </div>
  );
}

export default GreetingToggler;

