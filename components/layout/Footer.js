import Link from "next/link";

export default function Footer1() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white" style={{ backgroundColor: "#000000" }}>
      <div className="py-5" style={{ backgroundColor: "#ed1b24" }}>
        <div className="container">
          <div className="row gy-4">
            {/* About Us */}
            <div className="col-md-4">
              <h4 className="fw-bold mb-3">Rreth Nesh</h4>
              <p className="text-white">
                Metali Ri është specializuar në prodhimin e karrigave dhe
                tavolinave metalike për restorante, kafene dhe institucione
                arsimore me cilësi të lartë.
              </p>
              <img
                src="/assets/img/logo/1.png"
                alt="Metali Ri Logo"
                style={{ width: "180px", marginTop: "1rem" }}
              />
            </div>

            {/* Useful Links */}
            <div className="col-md-4">
              <h4 className="fw-bold mb-3">Shërbimet Tona</h4>
              <ul className="list-unstyled">
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Karriga Restoranti</Link></li>
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Tavolina Kafeneje</Link></li>
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Banka Shkollore</Link></li>
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Karriga Barit</Link></li>
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Tavolina Konference</Link></li>
                <li><Link href="/project" className="text-white text-decoration-none d-block py-1">Karriga Terase</Link></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="col-md-4">
              <h4 className="fw-bold mb-3">Kontakt</h4>
              <p className="mb-1 text-white text-decoration-underline">Telefon:</p>
              <p className="mb-2">
                <Link href="tel:+38348555777" className="text-white text-decoration-none d-block">+383 48 555 777</Link>
                <Link href="tel:+38349666777" className="text-white text-decoration-none d-block">+383 44 53 80 80</Link>
              </p>
              <p className="mb-1 text-white p-2 bg-black">Na shkruani në email për çdo pyetje apo bashkëpunim: <Link
                href="mailto:metalirishpk@gmail.com"
                className="text-white text-decoration-underline fw-bold"
              >
                metalirishpk@gmail.com
              </Link></p>
             

              <div className="mt-4">
                <h5 className="fw-bold">Na Ndiqni:</h5>
                <div className="d-flex gap-3 mt-2">
                  <a href="https://www.facebook.com/Metali.Ri" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f fs-5 text-white" />
                  </a>
                  <a href="https://www.instagram.com/metali_ri/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fs-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 small">&copy; {year} Metali Ri</p>
          <ul className="list-unstyled d-flex gap-3 mb-0">
            <li className="text-white small text-decoration-none">Të gjitha të drejtat e rezervuara.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
