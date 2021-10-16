import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-new">
  <div className="container-fluid">
    <a className="navbar-brand"><Link to='/' className='link-nav'>JsQuiz</Link></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <ul>
         <li><span className="navbar-toggler-icon"></span></li>
         <li><span className="navbar-toggler-icon"></span></li>
         <li><span className="navbar-toggler-icon"></span></li>
     </ul>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to='/' className='link-nav'>Home</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page"><Link to='/Quiz' className='link-nav'>Quiz</Link></a>
        </li>
      </ul>
      {/*<form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
    </div>
  </div>
</nav>
    )
}

export default NavBar;
