import React from 'react'

const Projects = () => (
    <div class="container">
      <section id="portfolio">

        <h2>Portfolio</h2>
        <hr/>

        <div class="row">

          <div class="col-sm-4" id="projectOne">
            <a href ="https://mklakhan.github.io/movies-on-the-rocks/">
              <img class="project image-fluid" src="assets/motr.jpg" alt="Movies on the Rocks" id="proj-img"/>
              <p class="projectImageTitle">Movies on the Rocks</p>
            </a>
          </div>

          <div class="col-sm-4" id="projectTwo">
            <a href ="https://calm-castle-04071.herokuapp.com/">
              <img class="project image-fluid" src="assets/moody-app.jpg" alt="Moody App" id="proj-img"/>
              <p class="projectImageTitle">Moody App</p>
            </a>
          </div>

          <div class="col-sm-4" id="projectThree">
            <a href ="https://rconat.github.io/work-day-scheduler/">
              <img class="project image-fluid" src="assets/workdayscheduler.jpg" alt="Project Image 3" id="proj-img"/>
              <p class="projectImageTitle">Work Day Scheduler</p>
            </a>
          </div>

        </div>

        <br/>
        <br/>
        <br/>

        <div class="row">
          
          <div class="col-sm-4" id="projectFour">
            <a href ="https://rconat.github.io/Weather-Dashboard/">
              <img class="project image-fluid" src="assets/weather-dashboard.jpg" alt="Weather Dashboard" id="proj-img"/>
              <p class="projectImageTitle">Weather Dashboard</p>
            </a>
          </div>
          
          <div class="col-sm-4" id="projectFive">
            <a href ="https://rconat.github.io/password-generator/">
              <img class="project image-fluid" src="assets/passgen.jpg" alt="Password Generator" id="proj-img"/>
              <p class="projectImageTitle">Password Generator</p>
            </a>
          </div>
          
          <div class="col-sm-4" id="projectSix">
            <a href ="https://github.com/Rconat/mysql-burger-logger">
              <img class="project image-fluid" src="assets/eat-da-burger.jpg" alt="Eat Da Burger" id="proj-img"/>
              <p class="projectImageTitle">Eat-Da-Burger!</p>
            </a>
          </div>
          
        </div>

        <br/>
        <br/>
        <br/>
        
        <div class="row">
          <div class="col-sm-12">
            <h2 id="moreProj">More projects coming soon! ... </h2>
          </div>
        </div>

        <hr/>
        
      </section>
    </div>
)

export default Projects