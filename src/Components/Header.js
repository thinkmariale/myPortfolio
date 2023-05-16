import React, { Component } from "react";
import ParticlesBg from "particles-bg";


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
      
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
             
            <li>
              <a className="smoothscroll" href="#resume">
                CV
              </a>
            </li>

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
           
              <h1 className="responsive-headline">{name}</h1>
        
              <h3>{description}.</h3>
         
            <hr />
          
              <h2>Building immersive experiences and taking them to crypto.</h2>
            
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
