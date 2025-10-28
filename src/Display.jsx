import React from 'react'

export default function Display({ even, odd }) {
  return (
    <div className="display-container">
       
      <h1>Even Number: {even}</h1>
      <h1>Odd Number: {odd}</h1>
 
    </div>
  )
}
