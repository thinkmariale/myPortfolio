import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const Home = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Load the data from the JSON file (or replace with API call)
    const fetchData = async () => {
      if(data) return;
      try {
        const response = await fetch('/resumeData.json');
        const data = await response.json();
        setData(data || null);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {

      }
    }
    fetchData();
}, [data]);

  if (!data) return null;
  return (  
    <div className="App">
      <Header data={data.main} />
      <Portfolio data={data.portfolio}/>
      <About data={data.main} />
      <Resume data={data.resume} />
      
      <Footer data={data.main} />
    </div>
  );
}    

export default Home;
