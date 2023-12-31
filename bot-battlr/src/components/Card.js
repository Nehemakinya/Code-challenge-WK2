import React  from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return(
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
       <li className= "nav-item">
        <NavLink exact to="/" className="nav-link active" aria-current="page" >Home</NavLink>
       </li>
       <li className= "nav-item">
        <NavLink to="/products" className="nav-link" >Products</NavLink>
       </li>
       <li className= "nav-item">
        <NavLink to="/favourites" className="nav-link" >Favourites</NavLink>
       </li>
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 )
}

export default Navbar;
