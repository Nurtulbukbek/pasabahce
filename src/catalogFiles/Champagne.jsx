

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Enoteca440161",
        title: 'Enoteca 440161',
        value: "215",
        quantity: "6",
        price: "185",
        url: "/images/catalogItemsImages/champagneimgs/Enoteca440161.png",
        height: "50%",
    },
    {
        type: "/Bistro44410",
        title: 'Bistro 44410',
        value: "190",
        quantity: "6/12",
        price: "150",
        url: "/images/catalogItemsImages/champagneimgs/Bistro44410.png",
        height: "50%",
    },
    {
        type: "/Tulipe44160",
        title: 'Tulipe44160',
        value: "190",
        quantity: "6",
        price: "115",
        url: "/images/catalogItemsImages/champagneimgs/Tulipe44160.png",
        height: "50%",
    },
    {
        type: "/Vintage440283",
        title: 'Vintage 440283',
        value: "190",
        quantity: "6",
        price: "165",
        url: "/images/catalogItemsImages/champagneimgs/Vintage440283.png",
        height: "50%",
    },
]

function Champagne() {
        return(
            <>
                <Header/>
                <SliderCatalog/>

                <div className="container">
                <p className="catalogTitle">Фужеры для шампанского/коктейлей</p>
                
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


export default Champagne