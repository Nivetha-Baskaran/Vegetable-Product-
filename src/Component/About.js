import React from 'react';
const About = () => {
    return (
        <><body>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href=" ">
            <img src="./assets/veg logo 5.png" alt="" width="35" height="30" className="d-inline-block align-text-top" />
            <b className="fs-3">Organic Product</b>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-xl-0 ms-auto p-2 fs-4">
              <li className="nav-item">
                <a className="nav-link" href="./">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Product">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            {/* About Starting */}
            <div className="start d-flex flex-column justify-content-center align-items-center">
                <h1 className="mt-5"><span>Abo</span>ut Us</h1>
                <p className="mt-5 w-50 text-center">
                    Vegetables are an essential part of a healthy diet, offering a wide range of nutrients and health benefits.
                    They come in various types, each with unique properties and uses.</p>
                <img src="./assets/about.png" style={{width: "75%"}} alt="about"/>
            </div>



            {/* About Ending */}
        </body></>


    );
};



export default About;