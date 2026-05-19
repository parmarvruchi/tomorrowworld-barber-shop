import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid px-5">
<h1>hello</h1>
        {/* LOGO */}

        <Link
  className="navbar-brand"
  to="/"
>
  <img
    src={logo}
    alt="TomorrowWorld Logo"
    className="main-logo"
  />
</Link>

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

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
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