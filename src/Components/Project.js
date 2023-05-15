import React, { Component } from "react";
import {
 useLocation
} from "react-router-dom";


import Footer from "./Footer";

function Project () {
  const { query } = useLocation(); 

  const projectName = query.projects.title;
  const projectImage1 = "images/portfolio/"+ query.projects.image1;
  const projectImage2= "images/portfolio/" + query.projects.image2;
  const projectImage3 = "images/portfolio/" + query.projects.image3;

//alt={query.projects.title}

  return (
    <div className="App">
      <section id="project">
     
          <div className="row">
            <div className="twelve columns collapsed project-content">
              {/* <h1>{query.projects.title}</h1> */}
              <h1>{projectName}</h1>
              <p>{query.projects.intro}</p>
            </div>
            <div className ="rows flex-container project-content">
              <img id="project-img" alt ={projectName} src={projectImage1} />
              <img id="project-img" alt ={projectName} src={projectImage2} />
              <img id="project-img" alt ={projectName} src={projectImage3} />
            </div>

             <div >
              <h2>About </h2>
              <p>{query.projects.info1}</p>
              <p>{query.projects.info2}</p>
              </div>
          </div>
        
       
        <div className ="rows flex-container project-content">
        {query.projects.isVideo ?
        <iframe width="560" height="315" 
          src={query.projects.video}
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
         : <></>
        }

       </div>
       
      </section>
       <Footer data={query.footer} />
       </div>
    );
}

// class Testimonials extends Component {
  
//   render() {
//     const { testvalue } = useParams();
//     //if (!this.props.data) return null;

//     // const testimonials = this.props.data.testimonials.map(function(testimonials) {
//     //   return (
//     //     <li key={testimonials.user}>
//     //       <blockquote>
//     //         <p>{testimonials.text}</p>
//     //         <cite>{testimonials.user}</cite>
//     //       </blockquote>
//     //     </li>
//     //   );
//     // });

//     return (
//       <section id="testimonials">
//         <div className="text-container">
//           <div className="row">
//             <div className="two columns header-col">
//               <h1>
//                 <span>Client Testimonials</span>
//               </h1>
//             </div>

//             <div className="ten columns flex-container">
//              <p>{testvalue.data.title}</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

 export default Project;
