import Link from "next/link";
import { useState } from 'react';

export default function Services1() {
  const services = [
    {
      id: 1,
      title: "Karriga Restoranti",
      description: "Karriga të qëndrueshme dhe komode për restorante, me dizajn modern dhe materiale të cilësisë së lartë",
      icon: "/assets/img/icon/services_icon01.svg",
      image: "/assets/img/banner/serv-1.jpg"
    },
    {
      id: 2,
      title: "Tavolina Kafeneje",
      description: "Tavolina elegante për ambiente të kafeneve, të rezistente dhe të lehta për të pastruar",
      icon: "/assets/img/icon/services_icon02.svg",
      image: "/assets/img/banner/serv-2.jpg"
    },
    {
      id: 3,
      title: "Banka Shkollore",
      description: "Banka të qëndrueshme për shkolla, me ergonomi të përsosur për nxënësit",
      icon: "/assets/img/icon/services_icon03.svg",
      image: "/assets/img/banner/serv-3.jpg"
    },
    {
      id: 4,
      title: "Karriga Barit",
      description: "Karriga të larta dhe stilore për kopshte, me qëndrueshmëri të lartë",
      icon: "/assets/img/icon/services_icon04.svg",
      image: "/assets/img/banner/serv-44.jpg"
    },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="services-area py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center mb-5">
            <span className="d-block text-primary fw-semibold mb-2">Shërbimet Tona</span>
            <h2 className="fw-bold">Fushat e Specializimit</h2>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-sm overflow-hidden transition-all"
                onMouseEnter={() => setHoveredItem(service.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div 
                  className="card-img-top service-image"
                  style={{ 
                    backgroundImage: `url(${service.image})`,
                    height: '200px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="card-body text-start">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className="me-3" 
                      style={{ width: '40px', height: '40px' }} 
                    />
                    <h4 className="card-title mb-0">
                      {service.title}
                    </h4>
                  </div>
                  <p className="card-text text-muted mb-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-image {
          transition: transform 0.3s ease;
        }
        .card:hover .service-image {
          transform: scale(1.05);
        }
        .card {
          transition: box-shadow 0.3s ease;
        }
        .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
