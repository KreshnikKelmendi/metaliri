import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Layout breadcrumbTitle="Na Kontaktoni">
        <section className="contact-area pt-120 pb-120 bg-light">
          <div className="container">
            <div className="row justify-content-center align-items-center gy-5">
              {/* Contact Info */}
              <div className="col-lg-6">
                <div className="p-4 bg-white rounded shadow">
                  <h2 className="mb-3 text-dark fw-bold">Na Kontaktoni</h2>
                  <p className="mb-4">
                    Jeni të interesuar për produktet tona apo keni nevojë për më shumë informacione? Jemi këtu për t'ju ndihmuar! Mos hezitoni të na kontaktoni përmes telefonit, emailit, apo vizitoni showroomin tonë.
                  </p>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-2 text-danger">
                      <i className="fas fa-map-marker-alt me-2" />
                      Adresa jonë:
                    </h5>
                    <p className="mb-1">
                      Magjistrale Ferizaj – Gjilan Km 7,
                      <br />
                      Fshati Dardani, afër Campit Amerikan Bondsteel.
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-2 text-danger">
                      <i className="fas fa-phone-alt me-2" />
                      Telefon:
                    </h5>
                    <p className="mb-1">
                      <Link href="tel:+38348555777" className="text-dark text-decoration-none">
                        +383 48 555 777
                      </Link>
                      <br />
                      <Link href="tel:+38344538080" className="text-dark text-decoration-none">
                        +383 44 53 80 80
                      </Link>
                    </p>
                  </div>

                  <div className="mb-4">
                    <h5 className="fw-bold mb-2 text-danger">
                      <i className="fas fa-envelope me-2" />
                      Email:
                    </h5>
                    <Link
                      href="mailto:metalirishpk@gmail.com"
                      className="text-dark text-decoration-underline"
                    >
                       metalirishpk@gmail.com
                    </Link>
                  </div>

                  <div className="mt-4">
                    <h5 className="fw-bold text-danger">Vizitoni Showroomin Tonë!</h5>
                    <p className="mb-3">
                      Ejani dhe shikoni nga afër kualitetin e produkteve tona. Ne do të jemi të lumtur t'ju mirëpresim dhe t'ju ndihmojmë të gjeni zgjidhjen ideale për hapësirën tuaj!
                    </p>
                    <button
                      onClick={() => setShowImage(!showImage)}
                      className="btn btn-danger"
                    >
                      Shiko Showroomin tonë këtu
                    </button>

                    {showImage && (
                      <div className="mt-4">
                        <img
                          src="/assets/img/project/show-1.jpg" // 👉 zëvendësoje me foton e saktë
                          alt="Showroomi ynë"
                          className="img-fluid rounded shadow"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="col-lg-6">
                <div className="rounded overflow-hidden shadow">
                  <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2947.3186927916886!2d21.2949120761103!3d42.37835697119125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDIyJzQyLjEiTiAyMcKwMTcnNTEuMCJF!5e0!3m2!1sen!2s!4v1743963842603!5m2!1sen!2s" 
                  width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
