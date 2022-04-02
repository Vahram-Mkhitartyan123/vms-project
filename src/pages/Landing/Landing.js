import React from 'react'
import Nav from './components/Small-Navbar/Small-Navbar'
import Categories from './components/categories/categories'
import './landing.css'
import Offer from './components/offer/offer'
import Footer from './components/footer/footer.js'
function App() {
var i = 27;

  return (
    <div>
      <Nav />
      <h1 className = {'headline'}>Available tasks</h1>
      <Categories />
      <div className = {'cover-1'}>
        <p>{i} results found</p> 
        <br></br>
        <Offer></Offer>
        <Offer></Offer>
        <Offer></Offer>
        <Offer></Offer>
      </div>
      <Footer />
    </div>
  )
}

export default App 
