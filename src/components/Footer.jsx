
import "../styles/Footer.css"


function Footer() {

    return(
        <>
            <div className="container">
                <footer>
                    <img className="footer-pasabahce-logo" src="public/images/logos/pasabahceDarkLogo.png" alt="" height="50px" />

                     <div className="contacts">
                        <a href="#">
                            <img src="/images/logos/Imo-logo.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="public/images/logos/tiktok-logo.svg" alt="" />
                        </a>
                        <a href="#">
                        <img src="public/images/logos/insta-logo.png" alt="" />
                        </a>
                        <span>+993 65 123456</span>
                    </div>
                </footer>
                <div className="prod">
                    <p> © IPC 2021. All right reserved</p>
                    <p>Prod by Nurtulbukbek</p>
                </div>
            </div>
        </>
    )
}

export default Footer