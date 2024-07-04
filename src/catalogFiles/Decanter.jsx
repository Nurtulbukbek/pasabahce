import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Frigo80122",
        title: 'Frigo 80122',
        value: " 600",
        quantity: "1",
        price: " 35",
        url: "/images/catalogItemsImages/decanterimgs/Frigo80122.png",
        height: "50%",
    },
    {
        type: "/Köşem43414",
        title: 'Köşem 43414',
        value: " 750",
        quantity: "1",
        price: " 75",
        url: "/images/catalogItemsImages/decanterimgs/Köşem43414.png",
        height: "50%",
    },
    {
        type: "/Bacchus80111",
        title: 'Bacchus 80111',
        value: " 600",
        quantity: "1",
        price: " 35",
        url: "/images/catalogItemsImages/decanterimgs/Bacchus80111.png",
        height: "50%",
    },
    {
        type: "/Bistro43944",
        title: 'Bistro 43944',
        value: " 1000",
        quantity: "1",
        price: " 70",
        url: "/images/catalogItemsImages/decanterimgs/Bistro43944.png",
        height: "50%",
    },
    {
        type: "/Frigo80050",
        title: 'Frigo 80050',
        value: " 1000",
        quantity: "1",
        price: " 35",
        url: "/images/catalogItemsImages/decanterimgs/Frigo80050.png",
        height: "50%",
    },
    {
        type: "/Basic43964",
        title: 'Basic 43964',
        value: " 1300",
        quantity: "1",
        price: " 65",
        url: "/images/catalogItemsImages/decanterimgs/Basic43964.png",
        height: "50%",
    },
    {
        type: "/Bistro43944",
        title: 'Bistro 43944',
        value: " 1000",
        quantity: "1",
        price: " 70",
        url: "/images/catalogItemsImages/decanterimgs/Bistro43944.png",
        height: "50%",
    },
    {
        type: "/Bistro43944",
        title: 'Bistro 43944',
        value: " 1000",
        quantity: "1",
        price: " 70",
        url: "/images/catalogItemsImages/decanterimgs/Bistro43944.png",
        height: "50%",
    },
]

function Decanter() {
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


export default Decanter