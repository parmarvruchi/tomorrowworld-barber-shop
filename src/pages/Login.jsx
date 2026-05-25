import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";

function Login() {
  const [step, setStep] = useState("phone");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setStep("otp");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/user-dashboard");
  };

  return (
    <section className="auth-page">
      <div className="auth-left">
        <img src="/logo.png" alt="Logo" className="auth-logo" />
        <div className="auth-art">✂︎</div>
      </div>

      <div className="auth-right">
        {step === "phone" ? (
          <form className="auth-form" onSubmit={handleSignIn}>
            <h1>SIGN IN</h1>
            <p>Enter your phone number to login</p>

            <label>Phone Number</label>
            <div className="phone-row">
              <input value="IN +91" readOnly />
              <input type="tel" placeholder="Enter Phone Number" required />
            </div>

            <button>SIGN IN</button>

            <div className="auth-bottom">
              Don’t have an account? <Link to="/register">SIGN UP</Link>
            </div>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleVerify}>
            <h1>VERIFICATION CODE</h1>
            <p>Please enter the OTP sent to your mobile number</p>

            <label>OTP</label>
            <input type="text" placeholder="Enter OTP" required />

            <button>VERIFY AND PROCEED</button>

            <button
              type="button"
              className="secondary-auth-btn"
              onClick={() => setStep("phone")}
            >
              RESEND OTP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Login;