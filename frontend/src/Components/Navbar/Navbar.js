import React from 'react';
import "./Navbar.css"
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <div className= {`header ${props.mode}`} >

<h1 className="logo">{props.tittle}</h1>      
<nav className="navbar" id="nav">
    <a href="/" className={`ancor ${props.mode}`}>Home</a>
    <button  className={`darkbtn`} onClick={props.toggleMode}>{props.mode==="light"?"dark":"light"}</button>
</nav>
    </div>
  )};

//   here we define prop type isse humraa data props type safe rahta hai 
  Navbar.prototype = {tittle: PropTypes.string.isRequired,}

  Navbar.defaultProps = {
    tittle : "Set Tittle Here"
  }