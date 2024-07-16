

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
        url: "/images/catalogItemsImages/sodaimgs/sodacupA2.png",
        height: "50%",
    },
    {
        type: "/Valse42294",
        title: 'Valse 42294',
        value: "Объем: 60ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 65TMT",
        url: "/images/catalogItemsImages/sodaimgs/Valse42294.png",
        height: "50%",
    },
    {
        type: "/Casablanca52707",
        title: 'Casablanca 52707',
        value: "Объем: 475ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 175TMT",
        url: "/images/catalogItemsImages/sodaimgs/Casablanca52707.png",
        height: "50%",
    },
    {
        type: "/Snap41632",
        title: 'Snap 41632',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 3",
        price: "Цена: 65TMT",
        url: "/images/catalogItemsImages/sodacupA2.png",
        height: "50%",
    },
    {
        type: "/Leia420174",
        title: 'Leia 420174',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 100TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420174.png",
        height: "50%",
    },
    {
        type: "/Karat52888",
        title: 'Karat 52888',
        value: "Объем: 310ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 95TMT",
        url: "/images/catalogItemsImages/sodaimgs/Karat52888.jpg",
        height: "50%",
    },
    {
        type: "/Karat52885",
        title: 'Karat 52885',
        value: "Объем: 295ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 95TMT",
        url: "/images/catalogItemsImages/sodaimgs/Karat52885.jpg",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
        height: "50%",
    },
    {
        type: "/Leia420765",
        title: 'Leia 420765',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 210TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420765.png",
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