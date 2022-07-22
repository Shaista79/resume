import React from "react";

export default function WorkExperience() {
  return (
    <>
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="mb-4" style={{ color: "#154D52" }}>
        Work Experience
      </h2>
      <div className="container div-center">
        <div className="card" style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "#154D52" }}>
              Full Stack Developer 
              <span className="text-muted h6">
                at Techmonkshub Technology Solutions Pvt Ltd
              </span>
            </h5>

            <p className="card-text" style={{ color: "#154D52" }}>
              Worked as an intern at Techmonkshub Technology Solutions Pvt Ltd
            </p>
            <p className="card-text" style={{ color: "#154D52" }}>
              Day to Day work is making API's using Lumen framework connecting
              it with Angular and to design better UI for clients.
            </p>
            <p className="card-text" style={{ color: "#154D52" }}>
               worked on a Project of Whoopy Digital Admin and Employee Dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    
    <div className="work-experience-section px-3 px-lg-4">
        <h2 className="mb-4" style={{color: '#154D52'}}>Projects</h2>
        
        <div className="container div-center">
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>Blog App (MERN PROJECT)</h5>
      
          <p className="card-text"></p>
          <a href="https://blogappmernproject.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="card-link" style={{color: '#154D52'}}>See here</a>
        </div>
      </div>
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>Pharmaceutical website </h5>
      
          <p className="card-text">I have successfully deployed a Pharmaceutical website using HTML, CSS, JavaScript and NODE.JS</p>
          <a href="https://www.krishnadrugspecialities.in/" target="_blank" rel="noopener noreferrer" className="card-link" style={{color: '#154D52'}}>See here</a>
        </div>
      </div>
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>TeXtUtils</h5>
          
          <p className="card-text">Word Counter using HTML and JavaScript </p>
          <a href="https://shaista79.github.io/TeXtUtils/" target="_blank" rel="noopener noreferrer" className="card-link" style={{color: '#154D52'}}>See here</a>
      
        </div>
      </div>
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>Note-Book</h5>
          
          <p className="card-text">MERN Project</p>
          <a href="http://mernprojcetnewnotebook.herokuapp.com/login" target="_blank" rel="noopener noreferrer" className="card-link" style={{color: '#154D52'}}>See here</a>
      
        </div>
      </div>
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>TeXtCounter</h5>
          
          <p className="card-text">Word Counter In React</p>
          <a href="https://shaista79.github.io/Text-Counter/" target="_blank" rel="noopener noreferrer" className="card-link" style={{color: '#154D52'}}>See here</a>
      
        </div>
      </div>
     
    </div>
      </div>
      <hr />
      <div className="work-experience-section px-3 px-lg-4">
        <h2 className="mb-4"  style={{width: '100%'}}>Education</h2>
        <div className="container div-center">
      <div className="card"  style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title"style={{color: '#154D52'}}>Master of Business Administration</h5>
           <p className="card-text">2018-2020</p>
          <p className="card-text">Completed MBA in Finance from Doon Business School, Dehradun.</p>
          
          
        </div>
      </div>
      <div className="card"  style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title"style={{color: '#154D52'}}>Bechelor of Commerce</h5>
          <p className="card-text">2012-2015</p>
          <p className="card-text">Accounts Honors from Ranchi University.</p>
        </div>
      </div>
    
      <div className="card" style={{width: '100%'}}>
        <div className="card-body">
          <h5 className="card-title" style={{color: '#154D52'}}>Intermediate.</h5>
          <p className="card-text">2009-2011</p>
          
          <p className="card-text">Intermediate from Ranchi University in Accounts and Mathematics</p>
          

        </div>
      </div>
     
    </div>
      </div>
      </>
  );
}
