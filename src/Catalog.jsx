import "./styles/Catalog.css"

import Header from "./components/Header"
import SliderCatalog from "./components/SliderCatalog"
import Cups from "./components/CupsCatalog"

function Catalog() {

    return(
        <>
            <Header />
            <SliderCatalog />
            <Cups/>
        </>
    )
}

export default Catalog