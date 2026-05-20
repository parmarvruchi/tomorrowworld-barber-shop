import { Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  return (
    <section className="auth-page">
      <div className="auth-box">
        <h2>Login</h2>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <button className="btn btn-danger w-100 py-2">
          Login
        </button>

        <p>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;