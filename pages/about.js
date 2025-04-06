import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Brand3 from "@/components/sections/Brand3"
import Link from "next/link"
import Slider from "react-slick"

const settings = {
    dots: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function About() {
    return (
        <>
            <Layout breadcrumbTitle="Rreth Nesh">
                <div className="my-5">
                    <About1 />
                </div>

                {/* work-area */}
                <section className="work-area" style={{ padding: "80px 0", backgroundColor: "#f9f9f9" }}>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-title text-center mb-50">
                    <span className="sub-title" style={{ 
                        display: "inline-block",
                   
                        fontSize: "18px",
                        fontWeight: "600",
                        marginBottom: "15px"
                    }}>Procesi i Prodhimit</span>
                    <h2 className="title text-uppercase" style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        marginBottom: "0",
                        color: "#222"
                    }}>Procesi i Prodhimit tek ne</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div className="work-item" style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    height: "100%"
                }}>
                    <div className="work-icon" style={{ position: "relative", marginBottom: "20px" }}>
                        <i className="fas fa-pencil-ruler" style={{
                            fontSize: "50px",
                       
                            marginBottom: "15px",
                            display: "inline-block"
                        }}></i>
                        <h4 className="number" style={{
                            position: "absolute",
                            top: "-15px",
                            right: "-15px",
                            background: "#079fb6",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            margin: "0"
                        }}>01</h4>
                    </div>
                    <div className="work-content">
                        <h2 className="title" style={{
                            fontSize: "20px",
                            marginBottom: "15px",
                            color: "#222"
                        }}>Planifikimi</h2>
                        <p style={{
                            color: "#666",
                            marginBottom: "0"
                        }}>Dizajnimi i modeleve dhe planifikimi i procesit të prodhimit për mobiljet tuaja</p>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div className="work-item" style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    height: "100%"
                }}>
                    <div className="work-icon" style={{ position: "relative", marginBottom: "20px" }}>
                        <i className="fas fa-cubes" style={{
                            fontSize: "50px",
                            color: "#079fb6",
                            marginBottom: "15px",
                            display: "inline-block"
                        }}></i>
                        <h4 className="number" style={{
                            position: "absolute",
                            top: "-15px",
                            right: "-15px",
                            background: "#079fb6",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            margin: "0"
                        }}>02</h4>
                    </div>
                    <div className="work-content">
                        <h2 className="title" style={{
                            fontSize: "20px",
                            marginBottom: "15px",
                            color: "#222"
                        }}>Përzgjedhja e Materialeve</h2>
                        <p style={{
                            color: "#666",
                            marginBottom: "0"
                        }}>Përdorim materiale metalike të cilësisë më të lartë për qëndrueshmëri maksimale</p>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div className="work-item" style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    height: "100%"
                }}>
                    <div className="work-icon" style={{ position: "relative", marginBottom: "20px" }}>
                        <i className="fas fa-cogs" style={{
                            fontSize: "50px",
                            color: "#079fb6",
                            marginBottom: "15px",
                            display: "inline-block"
                        }}></i>
                        <h4 className="number" style={{
                            position: "absolute",
                            top: "-15px",
                            right: "-15px",
                            background: "#079fb6",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            margin: "0"
                        }}>03</h4>
                    </div>
                    <div className="work-content">
                        <h2 className="title" style={{
                            fontSize: "20px",
                            marginBottom: "15px",
                            color: "#222"
                        }}>Prodhimi</h2>
                        <p style={{
                            color: "#666",
                            marginBottom: "0"
                        }}>Prodhimi i mobiljeve me teknologji moderne dhe precizion të lartë</p>
                    </div>
                </div>
            </div>
            
            <div className="col-xl-3 col-md-6" style={{ marginBottom: "30px" }}>
                <div className="work-item" style={{
                    textAlign: "center",
                    padding: "30px 20px",
                    borderRadius: "8px",
                    background: "#fff",
                    boxShadow: "0 5px 30px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    height: "100%"
                }}>
                    <div className="work-icon" style={{ position: "relative", marginBottom: "20px" }}>
                        <i className="fas fa-check-circle" style={{
                            fontSize: "50px",
                            color: "#079fb6",
                            marginBottom: "15px",
                            display: "inline-block"
                        }}></i>
                        <h4 className="number" style={{
                            position: "absolute",
                            top: "-15px",
                            right: "-15px",
                            background: "#079fb6",
                            color: "white",
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                            margin: "0"
                        }}>04</h4>
                    </div>
                    <div className="work-content">
                        <h2 className="title" style={{
                            fontSize: "20px",
                            marginBottom: "15px",
                            color: "#222"
                        }}>Kontrollet e Cilësisë</h2>
                        <p style={{
                            color: "#666",
                            marginBottom: "0"
                        }}>Testime rigoroze për të garantuar produktet perfekte për klientët</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
                {/* work-area-end */}

                {/* history-area */}
                <section className="history-area pt-120 pb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="history-img-wrap">
                                    <ul className="list-wrap">
                                        <li>
                                            <img src="/assets/img/banner/metal-banner-1.jpg" alt="Prodhimi i mobiljeve" />
                                        </li>
                                        <li className="d-none d-lg-block">
                                            <img src="/assets/img/banner/metal-banner-3.jpg" alt="Procesi i prodhimit" />
                                           
                                        </li>
                                        <li>
                                            <img src="/assets/img/banner/metal-banner-2.jpg" alt="Produktet e gatshme" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="history-content">
                                    <div className="section-title mb-20">
                                        <span className="sub-title">Historia Jonë</span>
                                        <h2 className="title">Metali Ri</h2>
                                    </div>
                                    <p>Metali Ri është specializuar në prodhimin e karrigave, tavolinave dhe mobiljeve të tjera metalike për restorante, kafene dhe institucione arsimore me cilësi të lartë dhe dizajn modern.</p>
                                    <div className="history-list">
                                        <ul className="list-wrap">
                                            <li><i className="fas fa-check-circle" />Teknologji moderne prodhimi</li>
                                            <li><i className="fas fa-check-circle" />Zgjidhje të personalizuara</li>
                                            <li><i className="fas fa-check-circle" />Ekspertizë në dizajn</li>
                                            <li><i className="fas fa-check-circle" />Shërbim i shpejtë dhe besueshëm</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* history-area-end */}

            </Layout>
        </>
    )
}