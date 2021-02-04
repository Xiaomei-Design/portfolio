import React, {useEffect} from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import About from './About';
import Interests from './Interests';
import Projects from './Projects';

const Home = () => {
  useEffect(() => {
    document.title = "Home | Web Developer Xiaomei Wu"
  })
  return (
    <div>
      <Navbar />
      <Header />
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/xiaomei-wu" style={{min-width:"320px", height:"630px"}}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script> */}
      <About />
      <Projects />
      <Interests />
      <Footer />
    </div>
  )
}

export default Home
