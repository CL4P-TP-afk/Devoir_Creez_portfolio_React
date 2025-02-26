import { NavLink } from "react-router";
import "./Nav.css";

const Lien = (props) => {
  return (
    <li class="nav-item">
      <NavLink
        className="style-lien"
        to={props.page}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red" : "",
            textDecoration: isActive ? "underline" : "none",
          };
        }}
      >
        {props.lien}
      </NavLink>
    </li>
  );
};

const Nav = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div class="container-fluid ">
            <span class="navbar-brand mb-0 h1 text-white text-uppercase">
              John Doe
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end "
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mb-2 mb-lg-0 ">
                <Lien lien="Home" page="/" />
                <Lien lien="Services" page="/services" />
                <Lien lien="Portofolio" page="/portfolio" />
                <Lien lien="Contact" page="/contact" />
                <Lien lien="Mentions Légales" page="/mentionslegales" />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
