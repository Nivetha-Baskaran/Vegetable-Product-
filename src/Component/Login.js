import React from 'react';



const Login = () => {
  var attempt = 3; // Variable to count number of attempts.
  // Below function Executes on click of login button.
  function validate({ validate }) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Formget" && password === "formget#123") {
      alert("Login successfully");
      window.location = "./"; // Redirecting to other page.
      return false;
    }
    else {
      attempt--;// Decrementing by one.
      alert("You have left " + attempt + " attempt;");
      // Disabling fields after 3 attempts.
      if (attempt === 0) {
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
    }
  }

  return (

    <> <body>
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

      <div className="login">
        <div className="WholeContainerLogin">
          <div className="FormContainerLogin">
            <form>
              <h1 className="text-center">Login</h1>
              <div className="BoxLogin">
                <label className="LoginLabel">UserName</label>
                <input type="text" placeholder="Enter your name..." required id="username" />
                <i className="fa-solid fa-user LoginIcon"></i>
              </div>
              <div className="BoxLogin">
                <label className="LoginLabel">Password</label>
                <input type="text" placeholder="Enter your password..." required id="password" />
                <i className="fa-solid fa-key LoginIcon"></i>
              </div>
              <input type="button" className="buttonLogin" value="Login" id="submit" onClick={validate} />

            </form>
          </div>

        </div>
      </div>



    </body ></>


  );
};


export default Login;

