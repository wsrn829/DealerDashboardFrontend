// import React from 'react';
// import { NavLink } from 'react-router-dom';
// // import './Nav.css';

// function Nav() {
//   return (
//       <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-center">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             {/* <img src="car.svg" alt="car" width="65" height="65" className="d-inline-block align-middle me-2" /> */}
//               DealerDashboard
//           </NavLink>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//               <li className='nav-item'>
//                 <NavLink className="nav-link" to="/">Home</NavLink>
//               </li>
//               <li className='nav-item dropdown'>
//                 <NavLink className="btn btn-secondary dropdown-toggle transparent-button" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Inventory</NavLink>
//                 <ul className="dropdown-menu multi-column columns-3">
//                   <div className="row">
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Manufacturers</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/manufacturers">Manufacturers List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/manufacturers/add">Add a Manufacturer</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Models</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/models">Models List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/models/add">Add a Model</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Automobiles</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/automobiles">Automobiles List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/automobiles/add">Add an Automobile</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </ul>
//               </li>
//               <li className='nav-item dropdown'>
//                 <NavLink className="btn btn-secondary dropdown-toggle transparent-button" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Sales</NavLink>
//                 <ul className="dropdown-menu multi-column columns-3">
//                   <div className="row">
//                     <div className="col-sm-4">
//                         <ul className="multi-column-dropdown">
//                           <li><h6 className="dropdown-header">Sales</h6></li>
//                           <li>
//                             <NavLink className="dropdown-item" to="/sales">Sales List</NavLink>
//                           </li>
//                           <li>
//                             <NavLink className="dropdown-item" to="/sales/history">Sales History</NavLink>
//                           </li>
//                           <li>
//                             <NavLink className="dropdown-item" to="/sales/add">Add a Sale</NavLink>
//                           </li>
//                         </ul>
//                       </div>``
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Customers</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/customers">Customers List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/customers/add">Add a Customer</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Salespeople</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/salespeople">Salespeople List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/salespeople/add">Add a Salesperson</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </ul>
//               </li>
//               <li className='nav-item dropdown'>
//                 <NavLink className="btn btn-secondary dropdown-toggle transparent-button" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>
//                 <ul className="dropdown-menu multi-column columns-3">
//                   <div className="row">
//                     <div className="col-sm-4">
//                         <ul className="multi-column-dropdown">
//                           <li><h6 className="dropdown-header">Technicians</h6></li>
//                           <li>
//                             <NavLink className="dropdown-item" to="/technicians">Technicians List</NavLink>
//                           </li>
//                           <li>
//                             <NavLink className="dropdown-item" to="/technicians/add">Add a Technician</NavLink>
//                           </li>
//                         </ul>
//                       </div>
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Appointments</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/appointments">Appointments List</NavLink>
//                         </li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/appointments/add">Add an Appointment</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="col-sm-4">
//                       <ul className="multi-column-dropdown">
//                         <li><h6 className="dropdown-header">Service</h6></li>
//                         <li>
//                           <NavLink className="dropdown-item" to="/services">Service History</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//   );
// }

// export default Nav;



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
                <NavLink className="nav-link active" to="/">Home</NavLink>
              </li>

              {/* <li className="nav-item dropdown">
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
            </li> */}

          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Inventory
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/manufacturers/create">Add Manufacturer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/manufacturers">Manufacturers</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/models/create">Add Car Model</NavLink></li>
              <li><NavLink className="dropdown-item" to="/models">Car Models</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/automobiles/create">Add Automobile</NavLink></li>
              <li><NavLink className="dropdown-item" to="/automobiles">Automobiles</NavLink></li>
            </ul>
          </li>

            {/* <li className="nav-item dropdown">
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
            </li> */}

            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/technicians/create">Add Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians">Technicians</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item" to="/appointments/create">Add Service Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments">Service Appointments</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/history">Service History</NavLink></li>
              </ul>
            </li>

            {/* <li className="nav-item dropdown">
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
          </li> */}

          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sales
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to="/salespeople/create">Add Salesperson</NavLink></li>
              <li><NavLink className="dropdown-item" to="/salespeople">Salespeople</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="/customers/create">Add Customer</NavLink></li>
              <li><NavLink className="dropdown-item" to="/customers">Customers</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
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
