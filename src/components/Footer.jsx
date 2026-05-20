import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section text-white">

      <div className="container">

        <div className="row g-4">

          {/* LOGO */}

          <div className="col-md-4">

            <img
              src="/logo.png"
              alt="TomorrowWorld Logo"
              className="footer-logo"
            />

            <p>
              Premium barber shop for modern grooming,
              stylish haircut and confidence.
            </p>

          </div>

          {/* QUICK LINKS */}

          <div className="col-md-4">

            <h5>Quick Links</h5>

            <p>
              <Link className="footer-link" to="/">
                Home
              </Link>
            </p>

            <p>
              <Link className="footer-link" to="/services">
                Services
              </Link>
            </p>

            <p>
              <Link className="footer-link" to="/about">
                About
              </Link>
            </p>

            <p>
              <Link className="footer-link" to="/contact">
                Contact
              </Link>
            </p>

          </div>

          {/* CONTACT */}

          <div className="col-md-4">

            <h5>Contact Info</h5>

            <p>
              📍 Ridhi sidhi arced, 80 Feet Rd,
              Patel Chokdi, Anand
            </p>

            <p>
              📞 +91 88661 91240
            </p>

            <p>
              ✉️ tomorrowworld@gmail.com
            </p>

          </div>

        </div>

        <hr />

        <p className="text-center mb-0">
          © 2026 TomorrowWorld Barber Shop.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;