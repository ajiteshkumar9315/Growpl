import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();

  function handleClick(){
    navigate("/RegisterForm");
  }

  function handleClick2(){
    navigate("/Plants");
  }

  return (
    <div>
      <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <img src="...public/a_image/1.png" alt="" sizes=""  />
    <button className="btn btn-outline-success"> select your location</button>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <button className="btn btn-outline-success signin" onClick={handleClick}>Namaste,Sign in <br />Account & List </button>
    {/* <a href="RegisterForm" className="btn btn-outline-success" role="button">Namaste,Sign in <br/>Account & List </a> */}
    <button className="btn btn-outline-success"> Order <br />& Return</button>
    {/* <button className="btn btn-outline-success"> Products</button> */}
    <div className="dropdown">
      
      <button className="btn btn-outline-success btn-lg dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Products
      </button>
      <ul className="dropdown-menu">
      <li><a className="dropdown-item" role="button" onClick={handleClick2} href='./google.com'>Plants </a></li>
        <li><a className="dropdown-item" href="/">Flowerpots</a></li>
        <li><a className="dropdown-item" href="/">Fertilizers/pesticide</a></li>
        <li><a className="dropdown-item" href="/">Other Products</a></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar




{/* This code is for double dropdown */}

      {/* <button className="btn btn-outline-success btn-lg dropdown-toggle me-5" data-bs-auto-close="outside" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Products
      </button>
      <ul className="dropdown-menu">
      <li className='dropstart'>
        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Plants </a>
        <ul className="dropdown-menu">
          <li><a href="#" className="dropdown-item">item1</a></li>
          <li><a href="#" className="dropdown-item">item1</a></li>
          <li><a href="#" className="dropdown-item">item1</a></li>
        </ul>
      </li> */}