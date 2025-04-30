import React, { useState } from 'react';

 function LiveInputDisplay() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (text) => {
    setInputValue(text.target.value);
  };

  return (
    <div >
      <h2>Live Input Display</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>You typed: <span>{inputValue}</span></p>
    </div>
  );
}
export default LiveInputDisplay