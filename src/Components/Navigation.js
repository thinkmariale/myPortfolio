import React, { Component } from "react";


class Navigation extends Component {
  render() {
    return (
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#about">
              About
            </a>
          </li>
          
          <li>
            <a className="smoothscroll" href="/#resume">
              CV
            </a>
          </li>

        </ul>
    </nav>
    );
  }
}

export default Navigation;
