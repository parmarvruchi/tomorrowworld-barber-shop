import "../styles/booking.css";

function Booking() {
  return (
    <section className="booking-page">
      <div className="container">
        <div className="booking-layout">
          
          <div className="booking-info">
            <p className="booking-tag">BOOK APPOINTMENT</p>

            <h1>
              Schedule Your Premium Grooming Session
            </h1>

            <p>
              Choose your service, date and time. Our expert barbers will confirm your appointment shortly.
            </p>

            <div className="info-card">
              <h4>Opening Hours</h4>
              <p>Monday - Saturday : 10:00 AM - 9:00 PM</p>
              <p>Sunday : 11:00 AM - 6:00 PM</p>
            </div>

            <div className="info-card">
              <h4>Contact</h4>
              <p>📞 +91 88661 91240</p>
              <p>📍 Ridhi sidhi arced, 80 Feet Rd, Patel Chokdi, Anand</p>
            </div>
          </div>

          <div className="booking-box">
            <div className="text-center mb-4">
              <p className="booking-tag">APPOINTMENT FORM</p>
              <h2 className="booking-title">Book Your Slot</h2>
            </div>

            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="booking-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control booking-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="booking-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control booking-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="booking-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control booking-input"
                    placeholder="Enter mobile number"
                  />
                </div>

                

                <div className="col-md-6 mb-4">
                  <label className="booking-label">Select Service</label>
                  <select className="form-select booking-input">
                    <option>Choose Service</option>
                    <option>Hair Cut - ₹199</option>
                    <option>Beard Trim - ₹149</option>
                    <option>Hair Styling - ₹299</option>
                    <option>Facial Cleanup - ₹399</option>
                  </select>
                </div>

             

                <div className="col-md-6 mb-4">
                  <label className="booking-label">Appointment Date</label>
                  <input type="date" className="form-control booking-input" />
                </div>

                <div className="col-md-6 mb-4">
                  <label className="booking-label">Select Time</label>
                  <input type="time" className="form-control booking-input" />
                </div>

                <div className="col-12 mb-4">
                  <label className="booking-label">Additional Notes</label>
                  <textarea
                    rows="4"
                    className="form-control booking-input"
                    placeholder="Write your special request..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="btn btn-danger booking-btn" type="submit">
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Booking;