import React from 'react';
import './App.css';

export default function button({ onEven, onOdd, onClear }) {
  return (
    <div className="buttons-container">
      <button className="btn" onClick={onEven}>Even</button>
      <button className="btn" onClick={onOdd}>Odd</button>
      <button className="btn clear-btn" onClick={onClear}>Clear</button>
    </div>
  );
}
