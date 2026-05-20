import { Link } from "react-router-dom";

import {
  FaCalendarCheck,
  FaCut,
  FaSprayCan,
  FaChair,
  FaClock,
} from "react-icons/fa";

function Home() {
  return (
    <>
      {/* HERO SECTION */}

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

      {/* FEATURES SECTION */}

      <section className="py-5 bg-black text-white text-center">
        <div className="container">

          <p className="text-danger fw-bold">
            WHY CHOOSE US
          </p>

          <h2 className="display-5 fw-bold mb-5">
            Experience The Difference
          </h2>

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

      {/* SERVICES SECTION */}

      <section className="py-5 services-section text-white">

        <div className="container">

          <div className="text-center mb-5">

            <p className="text-danger fw-bold">
              POPULAR SERVICES
            </p>

            <h2 className="display-5 fw-bold">
              Our Premium Services
            </h2>

          </div>

          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="service-card">

                <img
                  src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=800"
                  alt="Hair Cut"
                />

                <div className="p-4">
                  <h4>Hair Cut</h4>
                  <p>Professional haircut with perfect finishing.</p>
                  <h5 className="text-danger">₹199</h5>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card">

                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800"
                  alt="Beard Trim"
                />

                <div className="p-4">
                  <h4>Beard Trim</h4>
                  <p>Sharp beard styling and trimming service.</p>
                  <h5 className="text-danger">₹149</h5>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card">

                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800"
                  alt="Hair Styling"
                />

                <div className="p-4">
                  <h4>Hair Styling</h4>
                  <p>Trendy styling for parties and special looks.</p>
                  <h5 className="text-danger">₹299</h5>
                </div>

              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="service-card">

                <img
                  src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800"
                  alt="Facial Cleanup"
                />

                <div className="p-4">
                  <h4>Facial Cleanup</h4>
                  <p>Refreshing face cleanup for glowing skin.</p>
                  <h5 className="text-danger">₹399</h5>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-image-box">

                <img
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200"
                  alt="Barber"
                  className="img-fluid about-main-img"
                />

                <div className="experience-card">
                  <h1>10+</h1>
                  <p>Years Experience</p>
                </div>

              </div>

            </div>

            <div className="col-lg-6">

              <p className="section-tag">
                ABOUT US
              </p>

              <h2 className="about-title">
                We Create Style & Confidence
              </h2>

              <p className="about-text">
                TomorrowWorld Barber Shop delivers premium grooming services with
                expert barbers, luxury atmosphere, and modern style trends.
              </p>

              <p className="about-text">
                Our mission is to make every customer feel stylish, confident,
                and refreshed with professional care and precision cuts.
              </p>

              <div className="about-features">

                <div className="feature-item">
                  ✔ Professional Barbers
                </div>

                <div className="feature-item">
                  ✔ Premium Grooming Products
                </div>

                <div className="feature-item">
                  ✔ Modern Equipment
                </div>

                <div className="feature-item">
                  ✔ Luxury Experience
                </div>

              </div>

              <button className="btn btn-danger btn-lg px-4 mt-4">
                Read More
              </button>

            </div>

          </div>
        </div>
      </section>

     
    </>
  );
}

export default Home;