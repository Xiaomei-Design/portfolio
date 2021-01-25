import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to='/about'>About me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
    </div>
  )
}

export default Nav
