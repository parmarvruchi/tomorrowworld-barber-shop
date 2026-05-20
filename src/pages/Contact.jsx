import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-header text-center">
          <p>CONTACT US</p>
          <h1>Get In Touch</h1>
          <span>Book your grooming session or contact us for any enquiry.</span>
        </div>

        <div className="row g-5 mt-5">
          <div className="col-lg-5">
            <div className="contact-info-box">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <h5>Address</h5>
                  <p>
                    Ridhi Sidhi Arcade, 80 Feet Rd, Patel Chokdi,
                    Vivekanand Wadi, Anand, Gujarat 388120
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FaPhoneAlt />
                <div>
                  <h5>Phone</h5>
                  <p>+91 88661 91240</p>
                </div>
              </div>

              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <h5>Email</h5>
                  <p>tomorrowworld@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <FaClock />
                <div>
                  <h5>Opening Hours</h5>
                  <p>Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p>Sunday: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form-box">
              <h2>Send Message</h2>

              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control contact-input"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="email"
                      className="form-control contact-input"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="tel"
                      className="form-control contact-input"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-md-6 mb-4">
                    <input
                      type="text"
                      className="form-control contact-input"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="col-12 mb-4">
                    <textarea
                      rows="5"
                      className="form-control contact-input"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-danger contact-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="map-box mt-5">
          <iframe
            title="TomorrowWorld Barber Shop Location"
            src="https://www.google.com/maps?q=Ridhi+Sidhi+Arcade,+80+Feet+Rd,+Patel+Chokdi,+Vivekanand+Wadi,+Anand,+Gujarat+388120&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;