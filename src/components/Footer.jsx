
import "../styles/Footer.css"


function Footer() {

    return(
        <>
            <div className="container">
                <footer>
                    <img className="footer-pasabahce-logo" src="/images/logos/pasabahceDarkLogo.png" alt="" height="50px" />

                     <div className="contacts">
                        <a href="https://www.tiktok.com/@pasabahce_tm?is_from_webapp=1&sender_device=pc">
                            <img src="/images/logos/tiktok-logo.svg" alt="" />
                        </a>
                        <a href="#">
                        <img src="/images/logos/insta-logo.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="/images/logos/Imo-logo.png" alt="" />
                        </a>
                        <span>+993 61 931551</span>
                    </div>
                </footer>
                <div className="prod">
                    <p>Prod by Nurtulbukbek</p>
                </div>
            </div>
        </>
    )
}

export default Footer