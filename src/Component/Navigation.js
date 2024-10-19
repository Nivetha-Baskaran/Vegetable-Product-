import React from "react";
import { Outlet, Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      {/* Nav Bar Starting      */}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src="./assets/veg logo 5.png" alt="" width="35" height="30" className="d-inline-block align-text-top" />
            <b className="fs-3">Organic Product</b>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0 ms-auto p-2 fs-4">
              <li className="nav-item">
                <Link className="nav-link" to="./Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="./Login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />

      {/* Nav Bar Ending     */}


      
    </>
  )
}
export default Navigation;