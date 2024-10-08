

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Pub55299",
        title: 'Pub 55299',
        value: "380ml",
        quantity: "2",
        price: "60",
        url: "/images/catalogItemsImages/beerimgs/Pub55299.jpg",
        height: "50%",
    },
    {
        type: "/Pub55229",
        title: 'Pub 55229',
        value: "660",
        quantity: "2",
        price: "75",
        url: "/images/catalogItemsImages/beerimgs/Pub55229.jpg",
        height: "50%",
    },
    {
        type: "/Pub55289",
        title: 'Pub55289',
        value: "500",
        quantity: "2",
        price: "65",
        url: "/images/catalogItemsImages/beerimgs/Pub55289.jpg",
        height: "50%",
    },
    {
        type: "/Pub42528",
        title: 'Pub 42528',
        value: "700",
        quantity: "2",
        price: "50",
        url: "/images/catalogItemsImages/beerimgs/Pub42528.jpg",
        height: "50%",
    },
    {
        type: "/Bacchus80113",
        title: 'Bacchus 80113',
        value: "500",
        quantity: "2",
        price: "40",
        url: "/images/catalogItemsImages/beerimgs/Bacchus80113.jpg",
        height: "50%",
    },
    {
        type: "/Pub42477",
        title: 'Pub 42477',
        value: "500",
        quantity: "2",
        price: "50",
        url: "/images/catalogItemsImages/beerimgs/Pub42477.png",
        height: "50%",
    },
    {
        type: "/Pub42199",
        title: 'Pub 42199',
        value: "320",
        quantity: "6",
        price: "90",
        url: "/images/catalogItemsImages/beerimgs/Pub42199.jpg",
        height: "50%",
    },
    {
        type: "/Pub420497",
        title: 'Pub 420497',
        value: "500",
        quantity: "2",
        price: "60",
        url: "/images/catalogItemsImages/beerimgs/Pub420497.jpg",
        height: "50%",
    },
    {
        type: "/Bistro44417",
        title: 'Bistro 44417',
        value: "400",
        quantity: "6",
        price: "125",
        url: "/images/catalogItemsImages/beerimgs/Bistro44417.png",
        height: "50%",
    },
    {
        type: "/Pub55341",
        title: 'Pub 55341',
        value: "265",
        quantity: "2",
        price: "65",
        url: "/images/catalogItemsImages/beerimgs/Pub55341.png",
        height: "50%",
    },
    {
        type: "/Pub55861",
        title: 'Pub 55861',
        value: "265",
        quantity: "2",
        price: "70",
        url: "/images/catalogItemsImages/beerimgs/Pub55861.png",
        height: "50%",
    },
]

function Beer() {
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


export default Beer
