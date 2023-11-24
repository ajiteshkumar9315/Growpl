import React from 'react'
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  #EFEFE8FF

 const Footer = () => {
  return (
    <>
    <footer className="foot">
      <div className="foo-left">
      <img src="../img/plant.jpg " alt="" width='200px' height='200px' className='shadow bg-body-tertiary  foo-img' />
      <p className='container1'>
      Welcome to our plant's website, where we celebrate the beauty and benefits of nature's greenery. Explore our collection of plants, from vibrant flowers to lush foliage, and bring the outdoors into your home or office. Learn about the care and maintenance of various plant species, and discover tips for keeping your plants healthy and thriving.
      </p>
      </div>
      <div className="foo-right">
      <div className="menu">
       
        <ul>
          <li className='mb-4 fw-bold'> Menu</li>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About US</a></li>
          <li><a href="/">Advantages</a></li>
          <li><a href="/">Blog</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>

      <div className="foo-plant">
        
        <ul>
          <li className='mb-4 fw-bold'>Plants</li>
          <li><a href="/">Hot Selling</a></li>
          <li><a href="/">Indoor Plants</a></li>
          <li><a href="/">Fruit Plants</a></li>
          <li><a href="/">Vegitable Plants</a></li>
          <li><a href="/">Water Plants</a></li>
          <li><a href="/">Low maintaines Plants</a></li>
          <li><a href="/">Decorative Plants</a></li>
          <li><a href="/">Cactus and Succulents</a></li>
        </ul>
      </div>

      <div className="foo-other">
        <ul>
          <li className='mb-4 fw-bold'> Other Product</li>
          <li><a href="/">Soils and Fertilizers</a></li>
          <li><a href="/">Planters</a></li>
          <li><a href="/">Seeds</a></li>
          <li><a href="/">Gardening Tools and Equipments</a></li>
          <li><a href="/">Gifts</a></li>
          <li><a href="/">Decors</a></li>
          <li><a href="/">Sales</a></li>
          <li><a href="/">Membership Card</a></li>
        </ul>
      </div>

      <div className="contact">
      
        <ul>
            <li className='mb-4 fw-bold'>Contact Us</li>
            <li>Address: A-4/35,Pachim Vihar,New Delhi 110063</li>
            <li>Email:ajiteshkumar9315888@gmail.com</li>
            <li>Phone: +91 9315888539</li>
        </ul>
      </div>
      </div>
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      <a href="https://www.facebook.com" className="foot-icon1"><i className="fa fa-facebook  "></i></a>
      <a href="http://Instagram.com" className="foot-icon2"><i className="fa fa-instagram wa_handels "></i></a>
      <a href="/" className="foot-icon3"><i className="fa fa-twitter wa_handels "></i></a>
     </footer>
    </>
     )
    }
    
    export default Footer
