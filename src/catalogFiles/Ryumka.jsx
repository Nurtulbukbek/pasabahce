

import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Dance42864",
        title: 'Dance 42864',
        value: "80",
        quantity: "6",
        price: "65",
        url: "/src/assets/ryumka.png",
        height: "40%",
    },
    {
        type: "/Dance42865",
        title: 'Dance 42865',
        value: "60",
        quantity: "6",
        price: "65",
        url: "src/assests2/ryumkaimgs/Dance42865.jpg",
        height: "50%",
    },
    {
        type: "/Allegra42043",
        title: 'Allegra 42043',
        value: "60",
        quantity: "6",
        price: "65",
        url: "src/assests2/ryumkaimgs/Allegra42043.png",
        height: "50%",
    },
    {
        type: "/Basic52837",
        title: 'Basic 52837',
        value: "60",
        quantity: "6",
        price: "60",
        url: "src/assests2/ryumkaimgs/Basic52837.jpeg",
        height: "50%",
    },
    {
        type: "/Side41050",
        title: 'Side 41050',
        value: "60",
        quantity: "6",
        price: "70",
        url: "src/assests2/ryumkaimgs/Side41050.webp",
        height: "50%",
    },
    {
        type: "/Elysia",
        title: 'Elysia',
        value: "60",
        quantity: "6",
        price: "125",
        url: "src/assests2/ryumkaimgs/Elysia.jpg",
        height: "50%",
    },
    {
        type: "/Retro440074",
        title: 'Retro 440074',
        value: "60",
        quantity: "6",
        price: "135",
        url: "src/assests2/ryumkaimgs/Retro440074.png",
        height: "50%",
    },
    {
        type: "/Vintage440182",
        title: 'Vintage 440182',
        value: "60",
        quantity: "6",
        price: "135",
        url: "src/assests2/ryumkaimgs/Vintage440182.png",
        height: "50%",
    },
    {
        type: "/Amber440286",
        title: 'Amber 440286',
        value: "80",
        quantity: "6",
        price: "115",
        url: "src/assests2/ryumkaimgs/Amber440286.jpg",
        height: "50%",
    },
    {
        type: "/Bistro44164",
        title: 'Bistro 44164',
        value: "60",
        quantity: "6/12",
        price: "75/145",
        url: "src/assests2/ryumkaimgs/Bistro44164.png",
        height: "50%",
    },

]

function Ryumka() {
        return(
            <>
                <Header/>
                <SliderCatalog/>

                <div className="container">
                <p className="catalogTitle">Рюмки</p>
                
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


export default Ryumka