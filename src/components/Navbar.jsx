import { NavLink, Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid px-5">

        {/* LOGO */}

        <img
          src="/logo.png"
          alt="TomorrowWorld Logo"
          className="main-logo"
        />

        {/* MOBILE BUTTON */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

            {/* HOME */}

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            {/* SERVICES */}

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            {/* ABOUT */}

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            {/* CONTACT */}

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link"
                    : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            {/* LOGIN */}

            <li className="nav-item">
              <Link
                className="btn btn-outline-light px-4"
                to="/login"
              >
                Login
              </Link>
            </li>

            {/* SIGNUP */}

            <li className="nav-item">
              <Link
                className="btn btn-danger px-4"
                to="/register"
              >
                Signup
              </Link>
            </li>

            {/* BOOK BUTTON */}

            <li className="nav-item">
              <Link
                className="btn btn-danger px-4 py-2"
                to="/booking"
              >
                <FaCalendarCheck className="me-2" />
                Book Appointment
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;