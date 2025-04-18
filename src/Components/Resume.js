import React, { Component } from "react";


class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const langmessage  = this.props.data.langmessage;
      
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });
    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
   
   
    const installations = this.props.data.installations.map(function (installations) {
      return (
        <div key={installations.name}>
          <h3>{installations.name}</h3>
        
           <ul className="info">
              {installations.place.map((value, index) => {
                return <li key={index}>{value}</li>
              })}
            </ul>

          
          <p>{work.description}</p>
        </div>
      );
    });
    
    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    const languages = this.props.data.languages.map((languages) => {
    
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + languages.name.toLowerCase();
      const width = languages.level;
          return (
            <li key={languages.name}>
              <span style={{ width, backgroundColor }} className={className}></span>
              <em>{languages.name}</em>
            </li>
          );
        });

      return (
      <section id="resume">
        
          <div className="row education">
            <div className="three columns header-col ">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
      

          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
      
          
         {/* <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>My Installations</span>
              </h1>
            </div>

            <div className="nine columns main-col">{installations}</div>
          </div>
        </Slide> */}

       
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Languages</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{langmessage}</p>

              <div className="bars">
                <ul className="skills">{languages}</ul>
              </div>
            </div>
          </div>
        
      </section>
    );
  }
}

export default Resume;
