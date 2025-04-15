import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Navigation from "./Navigation";


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name_intro;
    const description = this.props.data.description;

    return (
      <header id="home">
      <ParticlesBg num={200} type="thick"  bg={true} />
        <Navigation />

        <div className="row banner">
          <div className="banner-text">

              <h1 className="responsive-headline">{name}</h1>
              <h3>{description}.</h3>
            <hr />
              <h2>Building immersive experiences for a better tommorrow.</h2>

            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Projects
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#portfolio">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
