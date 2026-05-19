import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid px-5">
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <span className="logo-circle">TW</span>
          <div>
            <h4 className="mb-0 brand-title">TomorrowWorld</h4>
            <small className="brand-subtitle">The Barber Shop</small>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/booking">Booking</Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-danger px-4" to="/booking">
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