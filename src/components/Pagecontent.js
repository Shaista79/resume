import React from "react";
import About from "./About";
import ProgressContainer from "./ProgressContainer";
import WorkExperience from "./WorkExperience";
import Form from "./Form";
import Footer from "./Footer";
import image from './shaista.jpg';
import pdf from './Naaz Resume new.pdf'



export default function Pagecontent() {
 
  return (
    <>
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <div className="cover-bg p-3 p-lg-4">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="avatar hover-effect shadow-sm p-1 rounded">
                  <img
                   className="rounded"
                    src={image}
                    alt=" "
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </div>
              <div className=" col-md-7 text-center ">
                <h2> Shaista Naaz</h2>
                <p id="web">Web Developer</p>
                <div
                  className="d-print-none"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <a
                    className="btn btn-light text-dark shadow-sm mt-1 me-1"
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                  <a className="btn btn-success shadow-sm mt-1" href="#contact">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
          <About />
          <ProgressContainer />
          <hr/>
          <WorkExperience/>
          
          <Form/>
        </div>
      </div>
    </div>
   
     <Footer/>
     </>
  );
}

