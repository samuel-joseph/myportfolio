import React, { Component } from "react";
import "./App.css";
import profPic from "./image/image2.jpg";

import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="base">
          <div className="Profile">
            <img className="profpic" src={profPic} />
            <h1>SAMUEL JOSEPH PINANGAY</h1>
            <span>Jr Web Developer | Computer Science | Software Engineer</span>
            <div className="contact">
              Contact: New York, NY | PinangayJoel@gmail.com |
              (646)-824-4632LinkedIn/TechJoe| Github: Arcanlte|
              www.Portfolio.com
            </div>

            <nav>
              <div>About me</div>
              <div>Projects</div>
              <div>Contact me</div>
            </nav>
          </div>

          <div className="main">
            <AboutMe />
            <Projects />
            <div>Contact me</div>
          </div>
        </div>
      </div>
    );
  }
}
