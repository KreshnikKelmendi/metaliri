import Link from "next/link"
import { useEffect, useState } from 'react'
import Sidebar from "./Sidebar"

export default function Header({ headerCls, headerTop }) {
    const [scroll, setScroll] = useState(0)

    const [isToggled, setToggled] = useState(false)
    const handleToggled = () => {
        setToggled(!isToggled)
        !isToggled ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            {headerTop &&
                <div className="header-top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-9">
                                <div className="header-top-left">
                                    <ul className="list-wrap">
                                        <li>Mirësevini në Roofx Construction</li>
                                        <li><i className="fas fa-phone-alt" /><Link href="tel:0123456789">+355 ( 12 ) 345 678</Link></li>
                                        <li><i className="fas fa-envelope" /><Link href="mailto:info@roofx.com">info@roofx.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3">
                                <div className="header-top-right">
                                    <div className="header-lang">
                                        <div className="dropdown">
                                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="assets/img/icon/albania.jpg" alt="" /> Shqip
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/united-states.jpg" alt="" />Anglisht</Link>
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/italy.jpg" alt="" />Italisht</Link>
                                                <Link className="dropdown-item" href="/"><img src="assets/img/icon/germany.jpg" alt="" />Gjermanisht</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-social">
                                        <ul className="list-wrap">
                                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <header>
                <div id="sticky-header" className={`menu-area  ${scroll ? "sticky-menu" : ""} ${headerCls ? headerCls : ""}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleToggled}><i className="fas fa-bars" /></div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                        <div className="logo different-logo">
                                            <Link href="/"><img src="/assets/img/logo/1.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="logo d-none">
                                            <Link href="/"><img src="/assets/img/logo/1.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className=""><Link href="/">Kryefaqja</Link></li>
                                                <li><Link href="/about">Rreth Nesh</Link></li>

                                                <li><Link href="/produktet">Produktet</Link>

                                                </li>
                                                <li><Link href="/contact">Kontakti</Link>
                                                    
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="header-action d-none d-md-block">
                                            <ul className="list-wrap">
                                                <li className="header-btn"><Link href="/contact" className="btn" >Na Kontaktoni</Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                {/* Menuja Mobile */}
                                <div className="mobile-menu">
                                    <nav className="menu-box">
                                        <div className="close-btn" onClick={handleToggled}><i className="fas fa-times" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/assets/img/logo/1.png" alt="Logo" /></Link>
                                        </div>
                                        <div className="menu-outer">
                                            <Sidebar onLinkClick={() => {
                                                setToggled(false);
                                                document.body.classList.remove("mobile-menu-visible");
                                            }} />

                                        </div>
                                        <div className="social-links mt-5">
                                            <ul className="clearfix list-wrap">
                                                <p className="text-start">Për më shumë na ndiqni gjithashtu edhe në rrjetet tona sociale:</p>
                                                <li className="mt-5"><a href="https://www.facebook.com/Metali.Ri" target="_blank"><i className="fab fa-facebook-f" style={{fontSize:"30px"}} /></a></li>
                                                <li className="mt-5 pr-5"><a href="https://www.instagram.com/metali_ri/" target="_blank"><i className="fab fa-instagram" style={{fontSize:"30px"}} /></a></li>

                                            
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="menu-backdrop" />
                                {/* Fundi i Menusë Mobile */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}