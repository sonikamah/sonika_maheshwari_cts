import React from "react"; 
import '../css/counter.css';

 // Counter component
const Counter = ({ value = 0}) => (
    <div>
      <h1>Counter</h1>
      <h2>{value}</h2>
    </div>
);

export default Counter;