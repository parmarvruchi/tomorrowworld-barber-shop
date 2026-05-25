import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  return (
    <section className="auth-page">
      <div className="auth-left">
        <img src="/logo.png" alt="Logo" className="auth-logo" />
        <div className="auth-art">✂︎</div>
      </div>

      <div className="auth-right">
        <form className="auth-form">
          <h1>SIGN UP</h1>
          <p>Enter your details to register</p>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="col-md-6 mb-3">
              <label>Name</label>
              <input type="text" placeholder="Full Name" />
            </div>

            <div className="col-md-6 mb-3">
              <label>City</label>
              <input type="text" placeholder="City" />
            </div>

            <div className="col-md-6 mb-3">
              <label>DOB</label>
              <input type="date" />
            </div>
          </div>

          <button>SIGN UP</button>

          <div className="auth-bottom">
            Already have an account? <Link to="/login">SIGN IN</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;