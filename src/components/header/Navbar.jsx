import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section id="navBlock">
      <article>
        <div className="logoBlock">
          <h1>testyantra</h1>
        </div>
        <div className="authBlock">
          <ul>
            <li>
              <a href="#">Home</a>{" "}
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">MyAccount</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
