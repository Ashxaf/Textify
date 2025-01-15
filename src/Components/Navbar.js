import React from "react";
import logo from './texticon.png'
import './Navbar.css';

export default function Navbar(props) {



  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      
      <div className="container-fluid">
      <img src={logo} alt=""/>

        <a className="navbar-brand" href="/">
          {props.title}
        </a>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
