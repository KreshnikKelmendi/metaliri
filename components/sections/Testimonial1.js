import Slider from "react-slick"
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function Testimonial1() {
    return (
        <>
            <section className="testimonial-area pt-115 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="testimonial-img">
                                <img src="/assets/img/images/testimonial_img.jpg" alt="Produkte të Metali Ri" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title mb-45 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Dëshmi të Kënaqësisë</span>
                                    <h2 className="title tg-element-title">Klientët Tanë Thonë Për Metali Ri</h2>
                                </div>
                                <Slider {...settings} className="testimonial-active">
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>Për vite me radhë kemi zgjedhur Metali Ri për mobilje metalike. Karrigat dhe tavolinat e prodhuara janë të qëndrueshme, moderne dhe plotësojnë nevojat tona. Cilësia e materialeve dhe përpunimi i kujdesshëm i detajeve i bën produktet të qëndrojnë në kohë.</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="Klient i kënaqur" />
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">Klient i Besuar</h6>
                                                <p>Biznes lokal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>Kemi blerë një seri tavolinash për ambientet tona të jashtme dhe janë mbajtur perfektisht edhe pas disa vitesh përdorimi. Dizajni modern dhe rezistenca ndaj motit kanë qenë faktorë vendimtarë në zgjedhjen tonë për Metali Ri.</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="Klient i kënaqur" />
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">Partner i Vjetër</h6>
                                                <p>Kompani hoteliere</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-icon">
                                            <i className="fas fa-quote-left" />
                                        </div>
                                        <div className="testimonial-content">
                                            <p>Kombinimi i dizajnit modern me qëndrueshmërinë e metalit të cilësisë së lartë bën që produktet e Metali Ri të jenë zgjedhja jonë e parë. Kemi vlerësuar gjithmonë profesionalizmin dhe përgjegjësinë e ekipit të tyre në çdo porosi.</p>
                                        </div>
                                        <div className="testimonial-avatar">
                                            <div className="avatar-thumb">
                                                <img src="/assets/img/images/testi_avatar01.png" alt="Klient i kënaqur" />
                                            </div>
                                            <div className="avatar-content">
                                                <h6 className="title">Klient Biznesi</h6>
                                                <p>Restorant premium</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}