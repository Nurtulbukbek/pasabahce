

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Imperial44272",
        title: 'Imperial44272',
        value: "340",
        quantity: "6/12",
        price: "110/190",
        url: "src/assets/vineCup.png",
        height: "50%",
    },
    {
        type: "/Tulipe44162",
        title: 'Tulipe 44162',
        value: "320",
        quantity: "3/6/12",
        price: "65/120/225",
        url: "src/assests2/vineimgs/Tulipe44162.png",
        height: "50%",
    },
    {
        type: "/Enoteca44728",
        title: 'Enoteca 44728',
        value: "440",
        quantity: "6",
        price: "235",
        url: "src/assests2/vineimgs/Enoteca44728.png",
        height: "50%",
    },
    {
        type: "/Dalida440873",
        title: 'Dalida 440873',
        value: "300",
        quantity: "6",
        price: "115 ",
        url: "src/assests2/vineimgs/Dalida440873.png",
        height: "50%",
    },
    {
        type: "/Allegra440060",
        title: 'Allegra 440060',
        value: "236",
        quantity: "6",
        price: "170",
        url: "src/assests2/vineimgs/Allegra440060.png",
        height: "50%",
    },
    {
        type: "/Vintage440184",
        title: 'Vintage 440184',
        value: "245",
        quantity: "6",
        price: "170",
        url: "src/assests2/vineimgs/Vintage440184.png",
        height: "50%",
    },
    {
        type: "/Isabella440271",
        title: 'Isabella440271',
        value: "350",
        quantity: "6",
        price: "150",
        url: "src/assests2/vineimgs/Isabella440271.png",
        height: "50%",
    },
    {
        type: "/Isabella440272",
        title: 'Isabella 440272',
        value: "400",
        quantity: "6",
        price: "190",
        url: "src/assests2/vineimgs/Isabella440272.png",
        height: "50%",
    },
    {
        type: "/Allegra440265",
        title: 'Allegra 440265',
        value: "365",
        quantity: "2/6/12  ",
        price: "60/165/270",
        url: "src/assests2/vineimgs/Allegra440265.png",
        height: "50%",
    },
    {
        type: "/Amber440275",
        title: 'Amber 440275',
        value: "475",
        quantity: "6",
        price: "175",
        url: "src/assests2/vineimgs/Amber440275.png",
        height: "50%",
    },
    {
        type: "/Allegra440080",
        title: 'Allegra 440080',
        value: "350",
        quantity: "12",
        price: "315",
        url: "src/assests2/vineimgs/Allegra440080.png",
        height: "50%",
    },
]

function Vine() {
        return(
            <>
                <Header/>
                <SliderCatalog/>

                <div className="container">
                <p className="catalogTitle">Бокалы для вина</p>
                
                <div className="cupItemContainer">
                    {cupCatalog.map(cupCatalog => (
                        <div key={cupCatalog.type}>
                            <Link to={cupCatalog.type}>
                                <div className="exactCatalogItem">
                                    <span className="exactCatalogItemTitle">{cupCatalog.title}</span>
                                    <img src={cupCatalog.url} alt={cupCatalog.title} style={{height: `${cupCatalog.height}`}}/>
                                    
                                    <div className="exactCatalogItemText">
                                        <div className="exactCatalogItemInfo">
                                            <span>Объем: {cupCatalog.value}ml</span>
                                            <span>К/л в упаковкe: {cupCatalog.quantity}шт</span>
                                        </div>
                                        <div className="exactCatalogItemPrice">
                                            <span>Цена: {cupCatalog.price}TMT</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                </div>
                <Footer/>
             </>
        )
    } 


export default Vine