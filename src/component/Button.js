import React from "react";
import '../css/counter.css';

const Button = ({functionHandler, value}) => {
    return (
        <button onClick={functionHandler}>{value}</button>
    );
};
export default Button;