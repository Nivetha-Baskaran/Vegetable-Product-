// import './App.css';
import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Login from './Component/Login';

// import Navigation from './Component/Navigation';


function App(){
  return(
    <>
    
     <BrowserRouter>
        <Routes>
        
          {/* <Route path="/" element={<Navigation />}/> */}
            <Route path="/" element={<Home />} />
              
            <Route path="About" element={<About />} />
           
            <Route path="Contact" element={<Contact />} />
            <Route path="Product" element={<Product />} />
            <Route path="Login" element={<Login />} />
          {/* </Route> */}
          
        </Routes>
      </BrowserRouter>
     
    </>
  );
};

export default App;
