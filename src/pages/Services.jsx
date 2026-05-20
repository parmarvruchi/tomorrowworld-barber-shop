import { Link } from "react-router-dom";
import { FaClock, FaRupeeSign, FaCalendarCheck } from "react-icons/fa";
import "../styles/services.css";

const services = [
  {
    name: "Classic Hair Cut",
    price: 199,
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?q=80&w=800",
    desc: "Professional haircut with clean finishing and styling.",
  },
  {
    name: "Beard Trim",
    price: 149,
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800",
    desc: "Sharp beard trimming with perfect shape and detailing.",
  },
  {
    name: "Hair Styling",
    price: 299,
    duration: "35 min",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800",
    desc: "Trendy hairstyle for casual, party and special occasions.",
  },
  {
    name: "Facial Cleanup",
    price: 399,
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=800",
    desc: "Refreshing face cleanup for clean and glowing skin.",
  },
  {
    name: "Hair Spa",
    price: 599,
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?q=80&w=800",
    desc: "Relaxing hair spa treatment for smooth and healthy hair.",
  },
  {
    name: "Premium Grooming",
    price: 999,
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800",
    desc: "Complete grooming package for a premium stylish look.",
  },
];

function Services() {
  return (
    <section className="services-page">
      <div className="container">
        <div className="services-header text-center">
          <p>OUR SERVICES</p>
          <h1>Premium Barber Services</h1>
          <span>Choose your perfect grooming service and book your appointment.</span>
        </div>

        <div className="row g-4 mt-5">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="service-page-card">
                <img src={service.image} alt={service.name} />

                <div className="service-page-content">
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>

                  <div className="service-meta">
                    <span>
                      <FaRupeeSign /> {service.price}
                    </span>

                    <span>
                      <FaClock /> {service.duration}
                    </span>
                  </div>

                  <Link to="/booking" className="btn btn-danger w-100 mt-3">
                    <FaCalendarCheck className="me-2" />
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;