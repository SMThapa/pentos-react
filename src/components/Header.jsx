import { useState, useEffect} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const {pathname} = useLocation();
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
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <nav className={isScrolled ? "scrolled" : ""}>
            <div className="navigation">
                <Link to="/">
                    <div className="logo">
                        <img src="/logo/logo_big.png" alt=""/>
                    </div>
                </Link>
                <div className="menu-list">
                    <NavLink to="/">Home</NavLink>

                    <div className="dropdown">
                        <NavLink to="/product">Products <img src="/down.png" alt="icon"/></NavLink>
                        <div className="dropdown-content">
                            <Link to="/pages/product/uavs">UAVs <img src="/drone.png" alt="icon" loading="lazy" /></Link>
                            <Link to="/pages/product/cars">cars <img src="/car.png" alt="icon" loading="lazy"/></Link>
                            <Link to="/pages/product/boats">boats <img src="/boat.png" alt="icon" loading="lazy"/></Link>
                            <Link to="/pages/product/others">others <img src="/others.png" alt="icon" loading="lazy"/></Link>
                        </div>
                    </div>

                    <NavLink to="/accesories">Accessories</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/blogs">Explore</NavLink>
                    <NavLink to="/about">About Us</NavLink>
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
    