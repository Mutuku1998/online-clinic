import React from 'react'
import Routers from '../routes/Routers'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
const Layout = () => {
  return (
  <>
  <Header/>
  <main>
   <Routers/> 
  </main>
  <Footer/>
  </>
  )
}

export default Layout