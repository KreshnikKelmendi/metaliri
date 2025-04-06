import Link from "next/link"
import { useState } from "react"
import Brand1 from "./Brand1"

export default function Banner1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

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

    return (
        <>
            <section className="banner-area mt-2">
                <div className="" data-background="/assets/img/banner/banner_shape.jpg" />
                <div className="banner-bg" data-background="/assets/img/banner/metal-banner-1.jpg">
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
                </div>
                {/* zona e markave */}
                {/* <Brand1 /> */}
                {/* fundi i zones se markave */}
            </section>
        </>
    )
}