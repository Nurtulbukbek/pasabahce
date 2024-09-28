import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Tea97948",
        title: 'Tea97948',
        value: "215ml",
        quantity: "6",
        price: "150",
        url: "/images/catalogItemsImages/teaimgs/Tea97948.jpg",
        height: "40%",
    },
    {
        type: "/Chroma55813",
        title: 'Chroma 55813',
        value: "370ml",
        quantity: "2",
        price: "50",
        url: "/images/catalogItemsImages/teaimgs/Chroma55813.png",
        height: "50%",
    },
    {
        type: "/Tashkent96806",
        title: 'Tashkent 96806',
        value: "260ml",
        quantity: "2",
        price: "70",
        url: "/images/catalogItemsImages/teaimgs/Tashkent96806.png",
        height: "40%",
    },
    {
        type: "/TeaCoffee55411",
        title: 'Tea & coffee55411',
        value: "170ml",
        quantity: "6",
        price: "125",
        url: "/images/catalogItemsImages/teaimgs/Tea&coffee55411.png",
        height: "50%",
    },
    {
        type: "/Timeless42881",
        title: 'Timeless 42881',
        value: "170ml",
        quantity: "6",
        price: "125",
        url: "/images/catalogItemsImages/teaimgs/Timeless42881.png",
        height: "50%",
    },
]

function Tea() {
        return(
            <>
                <Header/>
                <SliderCatalog/>

                <div className="container">
                <p className="catalogTitle">Бокалы для чая</p>
                
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


export default Tea