import React, { useEffect, useState } from "react";
import "../Assets/Navbar.scss";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  });

  return (
      <nav className={`navbar fixed-top navbar-expand-lg ${scrolled && "nav-shadow"}` }>
        <div className="container">
          <img className='navbar-brand' src="images/introduction/logo.png" alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#hero">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#regisflow">Alur Pendaftaran</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedule">Jadwal</a>
              </li>
              <li className="nav-item">
                <button className='btn-nav'>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
