import React from "react";
import "./Footer.css";

export default function Footer(props) {
  return (
    <nav id="footer" className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#/">
        &copy; {props.date}
      </a>
    </nav>
  );
}
