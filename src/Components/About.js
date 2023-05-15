import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const email = this.props.data.email;
   // const resumeDownload = this.props.data.resumedownload;
    const background_1 = this.props.data.background_1;
    const background_2 = this.props.data.background_2;
    const background_3 = this.props.data.background_3;
    const earlylife_1 = this.props.data.earlylife_1;
    const earlylife_2 = this.props.data.earlylife_2;
    const earlylife_3 = this.props.data.earlylife_3;

      return ( 
      <div id="about">
       <ParticlesBg color="#ffffff" num={200} type="cobweb" bg={true}/>
    
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
          
           <h2>Background</h2>
              <p>{background_1}</p>
              <p>{background_2}</p>
              <p>{background_3}</p>
           <h2>Early Life</h2>
              <p>{earlylife_1}</p>
              <p>{earlylife_2}</p>
              <p>{earlylife_3}</p>
          
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                     
                      {city} {state}
                    </span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
      
      </div>
    );
  }
}

export default About;
