import React, { useState } from 'react';
import Display from './Display';
import Buttons from './button';

export default function App() {
  const [eventcount, setEven] = useState(0);
  const [oddcount, setOdd] = useState(1);

  const evenNumber = () => setEven(eventcount + 2);
  const oddNumber = () => setOdd(oddcount + 2);
  const handleClear = () => {
    setEven(0);
    setOdd(1);
  };

  return (
    <div className='box'>
      <Display even={eventcount} odd={oddcount} />
      <Buttons 
        onEven={evenNumber} 
        onOdd={oddNumber} 
        onClear={handleClear} 
      />
    </div>
  );
}
