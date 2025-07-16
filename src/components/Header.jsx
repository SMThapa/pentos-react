import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY !== 0);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup on unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={isScrolled ? "scrolled" : ""}>
            <div className="navigation">
                <a href="/">
                    <div className="logo">
                        <img src="/logo/logo_big.png" alt=""/>
                    </div>
                </a>
                <div className="menu-list">
                    <a href="/" className="active">Home</a>

                    <div className="dropdown">
                        <a href="/product">Products <img src="/down.png" alt="icon"/></a>
                        <div className="dropdown-content">
                            <a href="/pages/product/uavs">UAVs <img src="/drone.png" alt="icon" loading="lazy" /></a>
                            <a href="/pages/product/cars">cars <img src="/car.png" alt="icon" loading="lazy"/></a>
                            <a href="/pages/product/boats">boats <img src="/boat.png" alt="icon" loading="lazy"/></a>
                            <a href="/pages/product/others">others <img src="/others.png" alt="icon" loading="lazy"/></a>
                        </div>
                    </div>

                    <a href="/accesories">Accessories</a>
                    <a href="/services">Services</a>
                    <a href="/blogs">Explore</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="action-buttons">
                    <Link to="/contact">
                        <button className="btn-2">Get In Touch
                            <span>
                                <img src="/up-right-arrow2.png" alt="icon" className="first"/>
                                <img src="/up-right-arrow2.png" alt="icon" className="second"/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
    