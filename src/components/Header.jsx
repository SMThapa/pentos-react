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
        

    const [openDropDown, setOpenDropDown] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const handleHamburgerMenu = () =>{
        if(openMenu){
            setOpenMenu(false)
        }else(
            setOpenMenu(true)
        )        
    }


    useEffect(() => {
        window.scrollTo(0, 0);        
        setOpenDropDown(false);
        setOpenMenu(false)
    }, [pathname]);

    return (
        <nav className={isScrolled ? "scrolled" : ""}>
            <div className="navigation">
                <Link to="/">
                    <div className="logo">
                        <img src="/logo/logo_big.png" alt=""/>
                    </div>
                </Link>
                <div className={`menu-list ${openMenu ? 'menu-list-open' : '' }`}>
                    <NavLink to="/">Home</NavLink>

                    <div className={`dropdown ${openDropDown ? 'open-dropdown' : ''}`}>
                        <NavLink className={'product-desktop'} state={{ type: "all products" }} to="/product">Products <img src="/down.png" alt="icon"/></NavLink>
                        <p className={'product-mobile'} onClick={()=>setOpenDropDown(!openDropDown)}>Products <img src="/down.png" alt="icon"/></p>
                        <div className="dropdown-content">
                            <Link to="/product" state={{ type: "plane" }}>planes <img src="/drone.png" alt="icon" loading="lazy" /></Link>
                            <Link to="/product" state={{ type: "car" }}>cars <img src="/car.png" alt="icon" loading="lazy"/></Link>
                            <Link to="/product" state={{ type: "boat" }}>boats <img src="/boat.png" alt="icon" loading="lazy"/></Link>
                            <Link to="/product" state={{ type: "accessories" }}>accessories <img src="/others.png" alt="icon" loading="lazy"/></Link>
                        </div>
                    </div>                   
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/blogs">Explore</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact" className={'get-in-touch'}>Get In Touch</NavLink>
                </div>
                <div className="action-buttons">
                    <Link to="/contact" className="contact-btn">
                        <button className="btn-2">Get In Touch
                            <span>
                                <img src="/up-right-arrow2.png" alt="icon" className="first"/>
                                <img src="/up-right-arrow2.png" alt="icon" className="second"/>
                            </span>
                        </button>
                    </Link>
                    <div className={`menu-btn-1 ${openMenu ? 'active' : '' }`} onClick={handleHamburgerMenu}>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
    