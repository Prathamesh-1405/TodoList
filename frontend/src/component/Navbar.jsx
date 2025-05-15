import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

  const onLogout=()=>{
    

  }
  return (
    <nav
  className="navbar navbar-expand-lg navbar-dark mb-3"
  style={{
    backgroundImage: 'linear-gradient(to right, #000000, #434343)',
  }}
>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Just Do It</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/todo">Todos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addTodo">Add Todo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={onLogout} to="/login">Log out</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
