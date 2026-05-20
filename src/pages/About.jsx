import "../styles/about.css";

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-header text-center">
          <p>ABOUT US</p>
          <h1>TomorrowWorld Barber Shop</h1>
          <span>Premium grooming experience with style, confidence and care.</span>
        </div>

        <div className="row align-items-center g-5 mt-4">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200"
              alt="About Barber Shop"
              className="about-page-img"
            />
          </div>

          <div className="col-lg-6">
            <p className="about-small-title">WHO WE ARE</p>

            <h2>We Create Stylish Looks With Professional Care</h2>

            <p className="about-desc">
              TomorrowWorld Barber Shop is a modern grooming destination where
              customers get premium haircut, beard styling, facial cleanup and
              complete grooming services with expert barbers.
            </p>

            <p className="about-desc">
              Our focus is to provide a clean, comfortable and stylish salon
              experience with high-quality products and professional service.
            </p>

            <div className="about-stats">
              <div>
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3>5k+</h3>
                <p>Happy Customers</p>
              </div>

              <div>
                <h3>15+</h3>
                <p>Services</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="value-card">
            <h4>Our Mission</h4>
            <p>
              To provide premium grooming services that make every customer feel
              confident, fresh and stylish.
            </p>
          </div>

          <div className="value-card">
            <h4>Our Vision</h4>
            <p>
              To become a trusted barber shop brand known for quality, comfort
              and professional grooming.
            </p>
          </div>

          <div className="value-card">
            <h4>Why Choose Us</h4>
            <p>
              Expert barbers, premium products, modern equipment and a relaxing
              customer-friendly environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;