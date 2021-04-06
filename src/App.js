import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

// import pages
import About from "./pages/about"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Contact from "./pages/contact"

// import components
import Nav from "./components/nav"

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
