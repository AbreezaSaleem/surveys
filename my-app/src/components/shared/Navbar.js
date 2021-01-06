import React from 'react';
import './Nav.css'

function Navbar(props) {

  function logout() {
    localStorage.removeItem('token')
  }

  return (
    <ul>
      {/* <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li> */}
      <li><a href="#about" onClick={logout}>Logout</a></li>
    </ul>
  );
}

export default Navbar;