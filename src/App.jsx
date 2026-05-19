import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  FaCalendarCheck,
  FaCut,
  FaSprayCan,
  FaChair,
  FaClock,
} from "react-icons/fa";
import "./styles/home.css";


function Home() {
  return (
    <>
      <section className="hero-section text-white d-flex align-items-center">
        <div className="container">
          <div className="col-lg-6">
            <p className="welcome-text fw-bold">WELCOME TO</p>

            <h1 className="display-1 fw-bold hero-title">
              TomorrowWorld <br />
              <span>Barber</span> Shop
            </h1>

            <p className="lead text-light my-4">
              Where style meets precision. We don’t just cut hair, we craft confidence.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <Link to="/booking" className="btn btn-danger btn-lg px-4">
                <FaCalendarCheck className="me-2" />
                Book Appointment
              </Link>

              <Link to="/services" className="btn btn-outline-light btn-lg px-4">
                <FaCut className="me-2" />
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-black text-white text-center">
        <div className="container">
          <p className="text-danger fw-bold">WHY CHOOSE US</p>
          <h2 className="display-5 fw-bold mb-5">Experience The Difference</h2>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 p-4">
                <FaCut className="feature-icon mx-auto mb-3" />
                <h4>Expert Barbers</h4>
                <p className="text-secondary">
                  Our experienced barbers deliver the perfect cut every time.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 p-4">
                <FaSprayCan className="feature-icon mx-auto mb-3" />
                <h4>Premium Products</h4>
                <p className="text-secondary">
                  We use only top-quality products for the best results.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 p-4">
                <FaChair className="feature-icon mx-auto mb-3" />
                <h4>Relaxing Environment</h4>
                <p className="text-secondary">
                  Enjoy a comfortable and stylish environment designed for you.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark text-white border-secondary h-100 p-4">
                <FaClock className="feature-icon mx-auto mb-3" />
                <h4>On Time Service</h4>
                <p className="text-secondary">
                  We respect your time and always ensure prompt service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Services() {
  return <h1 className="text-center text-white mt-5">Services Page</h1>;
}

function Booking() {
  return <h1 className="text-center text-white mt-5">Book Appointment Page</h1>;
}

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;