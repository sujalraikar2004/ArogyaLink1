import React from 'react'
import Header from '../components/Header/Header.jsx'
import Footer from '../components/Header/Footer/Footer.jsx'
const Layout = ({children}) => {
  return (
    <>
    <Header/>

        <div> {children}</div>
       

    
    <Footer/>
      
    </>
  )
}

export default Layout
