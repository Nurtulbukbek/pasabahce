import Header from "./components/Header"
import Footer from "./components/Footer"
import "./styles/InDeveloping.css"

function Contacts() {

    return(
        <>
            <Header />
            <div className="inDeveloping">
                <img src="/images/logos/Duck.svg" alt="Duck" />
                <p>В ПРОЦЕССЕ..</p>
            </div>
            <Footer />
        </>
    )
}

export default Contacts