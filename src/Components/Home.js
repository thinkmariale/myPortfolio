import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

class Home extends Component {
  render() {

    if (!this.props.data) return null;

    return (
        
        <div className="App">
        <Header data={this.props.data.main} />
        
        <Portfolio data={this.props.data.portfolio} data1={this.props.data.main}/>
        <About data={this.props.data.main} />
        <Resume data={this.props.data.resume} />
        
        <Footer data={this.props.data.main} />
        </div>
    );
    }
    
}    

export default Home;
