import "../styles/Catalog.css"

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    
    {
        type: "/Borcam59003",
        title: 'Borcam 59003',
        value: "2100ml/d-180mm",
        quantity: "1",
        price: "180",
        url: "/images/catalogItemsImages/othersImages/Borcam59003.png",
        height: "50%",
    },
    {
        type: "/Borcam59013",
        title: 'Borcam 59013',
        value: "3200ml/d-240mm",
        quantity: "1",
        price: "200",
        url: "/images/catalogItemsImages/othersImages/Borcam59013.png",
        height: "50%",
    },
    {
        type: "/Borcam59014",
        title: 'Borcam 59014',
        value: "2950ml/d-320mm",
        quantity: "1",
        price: "135",
        url: "/images/catalogItemsImages/othersImages/Borcam59014.png",
        height: "30%",
    },
    {
        type: "/Borcam59024",
        title: 'Borcam 59024',
        value: "3.2l/315x280mm",
        quantity: "1",
        price: "130",
        url: "/images/catalogItemsImages/othersImages/Borcam59024.png",
        height: "30%",
    },
    {
        type: "/Borcam59052",
        title: 'Borcam 59052',
        value: "2.8l+1.8l/340x195mm",
        quantity: "1",
        price: "200",
        url: "/images/catalogItemsImages/othersImages/Borcam59052.png",
        height: "40%",
    },
    {
        type: "/Borcam59062",
        title: 'Borcam 59062',
        value: "2l + 1.7l/340x195",
        quantity: "1",
        price: "180",
        url: "/images/catalogItemsImages/othersImages/Borcam59062.png",
        height: "50%",
    },
    {
        type: "/Borcam59204",
        title: 'Borcam 59204',
        value: "3.8l/400x270mm",
        quantity: "1",
        price: "180",
        url: "/images/catalogItemsImages/othersImages/Borcam59204.png",
        height: "40%",
    },
    {
        type: "/Borcam59544",
        title: 'Borcam 59544',
        value: "1500ml/d-260mm",
        quantity: "1",
        price: "120",
        url: "/images/catalogItemsImages/othersImages/Borcam59544.png",
        height: "50%",
    },
    {
        type: "/Borcam59544scn",
        title: 'Borcam 59544',
        value: "2950ml/d-320mm",
        quantity: "1",
        price: "130",
        url: "/images/catalogItemsImages/othersImages/Borcam59544.png",
        height: "50%",
    },
]

function BakingDishes() {
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
                                            <span>Объем: {cupCatalog.value}</span>
                                            <span>К/л в упаквкe: {cupCatalog.quantity}шт</span>
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


export default BakingDishes

