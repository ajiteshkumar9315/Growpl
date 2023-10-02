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
        We are india's leading windows and doors brand in offeringhighquality products at an affordable rate.We Produced and installed millions of windows and doors with in-depth knowledge of the latest technologies and market demand.
      </p>
      </div>
      <div className="foo-right">
      <div className="menu">
       
        <ul>
          <li className='mb-4 fw-bold'> Menu</li>
          <li>Home</li>
          <li>About US</li>
          <li>Advantages</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="upvc">
        
        <ul>
          <li className='mb-4 fw-bold'>UPVC</li>
          <li>Casement Windows</li>
          <li>Sliding Windows</li>
          <li>Sliding Doors</li>
          <li>Casement Doors</li>
          <li>Fold And Slide</li>
          <li>Lift And Slide</li>
          <li>Tilt And Turn Windows</li>
          <li>Top Hung Windows</li>
        </ul>
      </div>

      <div className="system">
        <ul>
          <li className='mb-4 fw-bold'> System Aluminium</li>
          <li>Casement Aluminium Windows</li>
          <li>Sliding Aluminium Windows</li>
          <li>Casement Aluminium Doors</li>
          <li>Sliding Aluminium Doors</li>
        </ul>
      </div>

      <div className="contact">
      
        <ul>
            <li className='mb-4 fw-bold'>Contact Us</li>
            <li>Address: A-4/35,Pachim Vihar,New Delhi 110063</li>
            <li>Email:info@skywindoors.com</li>
            <li>Phone: +91 9999981448</li>
        </ul>
      </div>
      </div>
      {/* <FontAwesomeIcon icon="fa-brands fa-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      <a href="https://www.facebook.com/profile.php?id=100069513613629&mibextid=LQQJ4d" className="foot-icon1"><i className="fa fa-facebook  "></i></a>
      <a href="http://Instagram.com/windoors_solution" className="foot-icon2"><i className="fa fa-instagram wa_handels "></i></a>
      <a href="/" className="foot-icon3"><i className="fa fa-twitter wa_handels "></i></a>
     </footer>
    </>
     )
    }
    
    export default Footer
