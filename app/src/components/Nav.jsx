import { NavLink } from "react-router";
import "./links-styles.css";

const Lien = (props) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-lien"
        to={props.page}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "yellow" : "",
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
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
          <div className="container-fluid ">
            <h1 className="navbar-brand mb-0 h1 text-white text-uppercase">
              John Doe
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 ">
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
