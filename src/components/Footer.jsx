
import "../styles/Footer.css"
import imoLogo from "src/assets/Imo-logo.png"

function Footer() {

    return(
        <>
            <div className="container">
                <footer>
                    <img className="footer-pasabahce-logo" src="/src/assets/pasabahceDarkLogo.png" alt="" height="50px" />

                     <div className="contacts">
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                        <a href="#">
                            <img src="/src/assets/tiktok-logo.svg" alt="" />
                        </a>
                        <a href="#">
                            <img src={imoLogo} alt="" />
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