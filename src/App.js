import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Home from "./Components/Home";
import Project from "./Components/Project";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };
    //UA-110570651-1
    ReactGA.initialize("");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/:handle">
          <Project  />
        </Route>
        <Route path="/">
          <Home data = {this.state.resumeData} />
        </Route>
      </Switch> 
    </Router>
    );
}
}
export default App;
