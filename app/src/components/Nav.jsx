import { NavLink } from "react-router";

const Nav = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div class="container-fluid ">
            <span class="navbar-brand mb-0 h1 text-white">John Doe</span>
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
                <li class="nav-item">
                  <NavLink
                    to="/home"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/services"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/portfolio"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    Portofolio
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    Contact
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    to="/mentionslegales"
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "",
                        textDecoration: isActive ? "underline" : "",
                      };
                    }}
                  >
                    Mentions Légales
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
