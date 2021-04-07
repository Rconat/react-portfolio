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
            <a href ="https://rconat.github.io/work-day-scheduler/">
              <img className="project image-fluid" src="assets/workdayscheduler.jpg" alt="Project Image 3" id="proj-img"/>
              <p className="projectImageTitle">Work Day Scheduler</p>
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
              <img className="project image-fluid" src="assets/employee-directory.jpg" alt="react employee directory" id="proj-img"/>
              <p className="projectImageTitle">React Employee directory</p>
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