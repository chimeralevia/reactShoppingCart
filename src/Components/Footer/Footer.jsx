import React from "react";

export default function Footer(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        &copy; {props.date}
      </a>
    </nav>
  );
}
