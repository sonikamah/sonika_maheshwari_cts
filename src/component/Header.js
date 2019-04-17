import React from "react";
import { Link } from "react-router-dom";
import "./../css/header.css";

export default function Header() {
    return (
      <ul>
        <div className="pull-left">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact us</Link>
          </li>
        </div>

        <div className="pull-right">
          <li>
            <Link to="/login" className="headerLogin">Login</Link>
          </li>
        </div>
      </ul>
    );
  }