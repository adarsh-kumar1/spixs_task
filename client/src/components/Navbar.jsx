import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <div class="d-flex" >
            <Link class="btn btn-outline-success me-3 " style={{ backgroundColor: "rgb(252, 3, 32)" }} x to={"/login"}>
              Login/Register
            </Link>

          </div>
        </div>
      </nav>
    </div>
  );
}
