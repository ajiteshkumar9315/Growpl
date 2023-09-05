import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-light">
  <div className="container-fluid">
    {/* <href className="navbar-brand">Navbar</href> */}
    <img src="...public/a_image/1.png" alt="" sizes=""  />
    <button className="btn btn-outline-success"> select your location</button>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <button className="btn btn-outline-success"> Namaste,Sign in <br />Account & List</button>
    <button className="btn btn-outline-success"> Order <br />& Return</button>
    <button className="btn btn-outline-success"> Products</button>
  </div>
</nav>
    </div>
  )
}

export default Navbar
