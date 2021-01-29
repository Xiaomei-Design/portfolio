import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import About from './About';
import Blog from './Blog';
import Projects from './Projects';
// import Layout from '../components/Layout'

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/xiaomei-wu" style={{min-width:"320px", height:"630px"}}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> */}
      <About />
      <Projects />
      <Blog />
    </div>
  )
}

export default Home
