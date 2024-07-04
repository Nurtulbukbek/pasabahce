

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Aquatic41971",
        title: 'Aquatic 41971',
        value: "Объем: 60ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 80TMT",
        url: "/images/catalogItemsImages/sodacupA2.png",
        height: "50%",
    },
    {
        type: "/Valse42294",
        title: 'Valse 42294',
        value: "Объем: 60ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 65TMT",
        url: "/images/catalogItemsImages/Valse42294.png",
        height: "50%",
    },
    {
        type: "/vine",
        title: 'Imperial 228',
        value: "Объем: 340ml",
        quantity: "К/л в упаковке: 6/12",
        price: "Цена: 120/150TMT",
        url: "/images/catalogItemsImages/sodacupA2.png",
        height: "50%",
    },
    {
        type: "/vine",
        title: 'Imperial 228',
        value: "Объем: 340ml",
        quantity: "К/л в упаковке: 6/12",
        price: "Цена: 120/150TMT",
        url: "/images/catalogItemsImages/sodacupA2.png",
        height: "50%",
    },
    {
        type: "/vine",
        title: 'Imperial 228',
        value: "Объем: 340ml",
        quantity: "К/л в упаковке: 6/12",
        price: "Цена: 120/150TMT",
        url: "/images/catalogItemsImages/sodacupA2.png",
        height: "50%",
    },
]

function Soda() {
        return(
            <>
                <Header/>
                <SliderCatalog/>

                <div className="container">
                <p className="catalogTitle">Бокалы для напитков</p>
                
                <div className="cupItemContainer">
                    {cupCatalog.map(cupCatalog => (
                        <div key={cupCatalog.type}>
                            <Link to={cupCatalog.type}>
                                <div className="exactCatalogItem">
                                    <span className="exactCatalogItemTitle">{cupCatalog.title}</span>
                                    <img src={cupCatalog.url} alt={cupCatalog.title} style={{height: `${cupCatalog.height}`}}/>
                                    
                                    <div className="exactCatalogItemText">
                                        <div className="exactCatalogItemInfo">
                                            <span>{cupCatalog.value}</span>
                                            <span>{cupCatalog.quantity}</span>
                                        </div>
                                        <div className="exactCatalogItemPrice">
                                            <span>{cupCatalog.price}</span>
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


export default Soda