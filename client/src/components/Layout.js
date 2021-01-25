import React from 'react';
import {Layout, Header, Content, Footer} from 'antd'
import Nav from './Nav'


const Layout = () => {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default Layout
