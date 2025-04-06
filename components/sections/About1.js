import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                            <div className="about-img-wrap">
                                <img src="/assets/img/banner/metal-banner-2.jpg" alt="Fabrika Metali Ri" className="wow fadeInRight" data-wow-delay=".4s" />
                                <img src="/assets/img/banner/14.jpg" alt="Produkte Metali Ri" className="wow fadeInRight" data-wow-delay=".2s" />
                                <div className="about-experiences-wrap">
                                    <div className="experiences-item">
                                        <div className="icon" >
                                            <img src="/assets/img/icon/about_icon01.svg" alt="Eksperiencë" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Më shumë se 10 vjet eksperiencë në prodhim</h6>
                                        </div>
                                    </div>
                                    <div className="experiences-item">
                                        <div className="icon" >
                                            <img src="/assets/img/icon/about_icon02.svg" alt="Profesional" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Staf profesional me eksperiencë të gjatë</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-25 tg-heading-subheading animation-style3">
                                    <span className="sub-title tg-element-title">Rreth Kompanisë Sonë</span>
                                    <h4 className=" ">Ekspertë në Prodhimin e Karrigave dhe Tavolinave të ndryshme</h4>
                                </div>
                                <p>Metali Ri është specializuar në prodhimin e karrigave, tavolinave për restorante dhe kafene, si dhe bankave dhe karrigave shkollore me cilësi të lartë dhe qëndrueshmëri të provuar.</p>
                                <div className="about-list">
                                    <ul className="list-wrap" >
                                        <li><i className="fas fa-check"  />100+ Biznese të kënaqur me produktet tona</li>
                                        <li><i className="fas fa-check"  />Profesionalë të kualifikuar me eksperiencë të gjatë</li>
                                        <li><i className="fas fa-check"  />Prodhim me teknologji moderne dhe materiale premium</li>
                                    </ul>
                                </div>
                                <Link href="/about" className="btn" >Mësoni Më Shumë</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}