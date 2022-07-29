import React from "react";
import "./header.sass"

type Props = {};
function Header({ }: Props) {
  return (
    <div >
      <div className="header">
        <nav className="navbar">
          <ul className="navbar-items">
            <li className="title"><h2>Lange's Quiz</h2></li>
            <li className="social"><a href="https://github.com/mateusleitao" className="git">Github </a>
              <a href="https://www.linkedin.com/in/mateusleitao/">LinkedIn</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default Header;
