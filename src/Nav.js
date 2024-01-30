import React from 'react';
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">DealerDashboard</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Manufacturers
                </NavLink>
                <ul className="dropdown-menu">
                  <li><NavLink className="dropdown-item" to="/manufacturers/create">Add Manufacturer</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
                </ul>
              </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Models
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/models/create">Add Car Model</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">Car Models</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobiles
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/automobiles/create">Add Automobile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Technicians
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/technicians/create">Add Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/appointments/create">Add Service Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Salespeople
              </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/salespeople/create">Add Salesperson</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink></li>
            </ul>
            </li>

            <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Customers
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/customers/create">Add Customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customers">Customers</NavLink></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/sales/create">Add Sale</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/">Sales</NavLink></li>
              <li><NavLink className="dropdown-item" to="/sales/history">Salesperson History</NavLink></li>
            </ul>
          </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
