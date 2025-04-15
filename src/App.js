import React, {  useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import "./App.css";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import ProjectComponent from "./Components/ProjectComponent";
import { 
  Spinner
 } from "@chakra-ui/react"

const App = () => {

  return (
    <Router>
    <Switch>
      <Route path="/project/:id">
        <ProjectWithParams />
      </Route>
      <Route path="/">
        <Home  />
      </Route>
    </Switch> 
  </Router>
  );  
}

export default App;

const ProjectWithParams = () => {
  const [projects, setProjects] = useState(null);
  const [footer, setFooter] = useState(null);

  const { id } = useParams(); // Get the project ID from the URL
    useEffect(() => {
      // Load the data from the JSON file (or replace with API call)
      const fetchData = async () => {
      
        try {
          const response = await fetch('/resumeData.json');
          const data = await response.json();
          console.log(data);
          // Find the item by the given id   
          setProjects(data.portfolio || null);
          setFooter(data.main || null);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          
        }
      };
      fetchData();
  }, [id]);

  if (!projects) {
    return <Spinner size="xl" />;
  }

  // Pass the project data to ProjectComponent
  return  <>
    <ProjectComponent project={projects['projects'][id]} />;
    <Footer data={footer} />
  </>
};