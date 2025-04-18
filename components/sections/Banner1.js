import Link from "next/link"
import { useState, useEffect } from "react"
import Brand1 from "./Brand1"

export default function Banner1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const [currentSlide, setCurrentSlide] = useState(0)
    const slides = [
        "/assets/img/project/show-1.jpg",
        "/assets/img/banner/metal-banner-1.jpg",
        "/assets/img/banner/metal-banner-44.jpg",
         "/assets/img/banner/metal-banner-33.jpg"
    ]

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    // Auto slide change every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [slides.length])

    return (
        <>
            <section className="banner-area mt-2">
                <div className="" data-background="/assets/img/banner/banner_shape.jpg" />
                <div className="banner-bg" style={{ 
                    backgroundImage: `url(${slides[currentSlide]})`,
                    transition: 'background-image 1s ease-in-out'
                }}>
                    <div className="banner-content">
                        <h3 className="title wow fadeInDown" data-wow-delay=".2s">Shërbimet më të mira për tavolina dhe karrige</h3>
                        <p className="wow fadeInUp" data-wow-delay=".2s">Metali Ri është specializuar në prodhimin e karrigave dhe tavolinave për restorante, kafene dhe banka & karriga shkollore me cilësi të lartë.</p>
                        <Link href="/produktet" className="btn wow fadeInUp" data-wow-delay=".4s" >Eksploro Më Shumë</Link>
                    </div>
                    <div className="banner-tooltip-wrap">
                        <div className={isActive.key == 1 ? "tooltip-item top active" : "tooltip-item top"} onClick={() => handleToggle(1)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Karriga për Restorante</h2>
                                <p>Karriga tona të restauranteve janë të dizajnuara për rehati dhe qëndrueshmëri maksimale, të përshtatshme për çdo ambient.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 2 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(2)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Tavolina për Kafene</h2>
                                <p>Tavolina tona moderne për kafene kombinon elegancën dhe funksionalitetin për një përvojë të këndshme për klientët.</p>
                            </div>
                        </div>
                        <div className={isActive.key == 3 ? "tooltip-item active" : "tooltip-item"} onClick={() => handleToggle(3)}>
                            <div className="tooltip-btn pulse">
                                <i className="fas fa-plus" />
                            </div>
                            <div className="tooltip-content">
                                <h2 className="title">Banka Shkollore</h2>
                                <p>Banka tona shkollore ofrojnë komoditet dhe qëndrueshmëri për nxënësit, të prodhuara me materiale të cilësisë së lartë.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Slider navigation dots */}
                    <div className="slider-dots" style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px'
                    }}>
                        {slides.map((_, index) => (
                            <button 
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    border: 'none',
                                    background: currentSlide === index ? '#fff' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease'
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
                {/* zona e markave */}
                {/* <Brand1 /> */}
                {/* fundi i zones se markave */}
            </section>
            
            {/* Add CSS for smooth transitions */}
            <style jsx>{`
                .banner-bg {
                    transition: background-image 1s ease-in-out;
                }
            `}</style>
        </>
    )
}