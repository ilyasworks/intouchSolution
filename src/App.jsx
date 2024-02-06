// import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import ContactUs from './Pages/Contact Us/ContactUs';


const App = () => {
  return (
    <>
      <Router>
        <nav className='naveContinar' >
          <div>
           <h1> INTOUCH SOLUTION </h1>
          </div>
          <div className='pages'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
