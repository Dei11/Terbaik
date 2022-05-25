import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/singup">SingUp</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Menu;
