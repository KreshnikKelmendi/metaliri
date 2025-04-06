import Link from "next/link"
import { useState } from "react"

export default function Sidebar({ onLinkClick }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
                key: "",
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <div className="sidebar-container flex flex-col h-full">
            <ul className="navigation">
                <li className="menu-item-has-children ">
                    <Link href="/" onClick={onLinkClick}>Kryefaqja</Link>
                </li>
                <li>
                    <Link href="/about" onClick={onLinkClick}>Rreth Nesh</Link>
                </li>
                <li className="active">
                    <Link href="/produktet" onClick={onLinkClick}>Produktet</Link>
                </li>
                <li>
                    <Link href="/contact" onClick={onLinkClick}>Kontakti</Link>
                </li>
            </ul>

            {/* Footer Text Positioned at the bottom of Sidebar */}
            <div className="footer-text mt-auto px-4 pt-5 mt-5">
                <p className="text-uppercase">
                Fabrika për prodhimin e <b>KARRIGAVE</b> dhe <b>TAVOLINAVE</b> për <b>RESTAURANTE & KAFITERI</b> po ashtu <b>BANKA & KARRIGA SHKOLLORE.</b><br /> <br /> Gjindemi në Fshatin DARDANI-FERIZAJ</p>
            </div>
        </div>
    )
}
