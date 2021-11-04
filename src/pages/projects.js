import React from 'react'

const Projects = () => (
    <div className="container">
      <section id="portfolio">

        <h2>Projects</h2>
        <hr/>

        <div className="row">

          <div className="col-sm-4" id="projectOne">
            <a href ="https://mklakhan.github.io/movies-on-the-rocks/">
              <img className="project image-fluid" src="assets/motr.jpg" alt="Movies on the Rocks" id="proj-img"/>
              <p className="projectImageTitle">Movies on the Rocks</p>
            </a>
          </div>

          <div className="col-sm-4" id="projectTwo">
            <a href ="https://calm-castle-04071.herokuapp.com/">
              <img className="project image-fluid" src="assets/moody-app.jpg" alt="Moody App" id="proj-img"/>
              <p className="projectImageTitle">Moody App</p>
            </a>
          </div>

          <div className="col-sm-4" id="projectThree">
            <a href ="https://sheltered-garden-64832.herokuapp.com/">
              <img className="project image-fluid" src="assets/crypto-university.jpg" alt="Crypto University" id="proj-img"/>
              <p className="projectImageTitle">Crypto University</p>
            </a>
          </div>

        </div>

        <br/>
        <br/>
        <br/>

        <div className="row">
          
          <div className="col-sm-4" id="projectFour">
            <a href ="https://rconat.github.io/Weather-Dashboard/">
              <img className="project image-fluid" src="assets/weather-dashboard.jpg" alt="Weather Dashboard" id="proj-img"/>
              <p className="projectImageTitle">Weather Dashboard</p>
            </a>
          </div>
          
          <div className="col-sm-4" id="projectFive">
            <a href ="https://rconat.github.io/password-generator/">
              <img className="project image-fluid" src="assets/passgen.jpg" alt="Password Generator" id="proj-img"/>
              <p className="projectImageTitle">Password Generator</p>
            </a>
          </div>
          
          <div className="col-sm-4" id="projectSix">
            <a href ="https://rconat.github.io/react-employee-directory/">
              <img className="project image-fluid" src="assets/eat-da-burger.jpg" alt="Eat Da Burger" id="proj-img"/>
              <p className="projectImageTitle">Eat Da Burger!</p>
            </a>
          </div>
          
        </div>

        <br/>
        <br/>
        <br/>
        
        <div className="row">
          <div className="col-sm-12">
            <h2 id="moreProj">More projects coming soon! ... </h2>
          </div>
        </div>

        <hr/>
        
      </section>
    </div>
)

export default Projects