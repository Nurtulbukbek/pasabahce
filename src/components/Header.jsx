import { Link } from "react-router-dom"
import logo from "/images/logos/pasabahceDarkLogo.png"

function Header() {

    return(
        <>
            <div className="header-background">
                <header className="header">
                <nav className="container">
                        <div className="nav">
                            <div className="header-img">
                                <Link to="/" className="burger-links header-logo Link">
                                    <img src={logo} alt="logo" className="logo" />
                                </Link>
                            </div>
                            <div className="header-main"> 
                                <Link to="/" className="burger-links Link">Главная</Link>
                                <Link to="/catalog" className="burger-links Link">Каталог</Link>
                                <Link  to="/about-us"className="burger-links Link">О нас</Link>
                                <Link to="/contacts" className="burger-links Link">Контакты</Link>
                            </div>
                            <div className="header-contacts">
                                <span className="burger-links"> +993 65 123456</span>
                            </div>
                        </div>
                    </nav>

                    <div className="burger">
                        <input id="burger-toggle" type="checkbox" />
                        <label htmlFor="burger-toggle">
                            <span></span>
                        </label>
                        <ul className="header-list">
                                <Link to="/" className="burger-links Link">Mainpage</Link>
                                <Link to="/catalog" className="burger-links Link">Catalog</Link>
                                <Link to="/about-us" className="burger-links Link">About us</Link>
                                <Link to="/contacts" className="burger-links Link">Contacts</Link>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header