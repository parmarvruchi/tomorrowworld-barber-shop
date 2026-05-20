import { Link } from "react-router-dom";
import "../styles/auth.css";

function Register() {
  return (
    <section className="auth-page">
      <div className="auth-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Mobile Number" />
        <input type="password" placeholder="Password" />

        <button className="btn btn-danger w-100 py-2">
          Register
        </button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;