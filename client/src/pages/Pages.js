import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Projects from './Projects';
// import Interests from './Interests';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/blog" component={Blog} /> */}
    </Router>
  )
}

export default Pages
