

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
        url: "/images/catalogImages/ryumka.png",
        height: "40%",
    },
    {
        type: "/Dance42865",
        title: 'Dance 42865',
        value: "60",
        quantity: "6",
        price: "65",
        url: "/images/catalogItemsImages/ryumkaimgs/Dance42865.jpg",
        height: "50%",
    },
    {
        type: "/Allegra42043",
        title: 'Allegra 42043',
        value: "60",
        quantity: "6",
        price: "65",
        url: "/images/catalogItemsImages/ryumkaimgs/Allegra42043.jpg",
        height: "50%",
    },
    {
        type: "/Basic52837",
        title: 'Basic 52837',
        value: "60",
        quantity: "6",
        price: "60",
        url: "/images/catalogItemsImages/ryumkaimgs/Basic52837.jpg",
        height: "50%",
    },
    {
        type: "/Side41050",
        title: 'Side 41050',
        value: "60",
        quantity: "6",
        price: "70",
        url: "/images/catalogItemsImages/ryumkaimgs/Side41050.jpg",
        height: "50%",
    },
    {
        type: "/Elysia",
        title: 'Elysia',
        value: "60",
        quantity: "6",
        price: "125",
        url: "/images/catalogItemsImages/ryumkaimgs/Elysia.jpg",
        height: "50%",
    },
    {
        type: "/Retro440074",
        title: 'Retro 440074',
        value: "60",
        quantity: "6",
        price: "135",
        url: "/images/catalogItemsImages/ryumkaimgs/Retro440074.jpg",
        height: "50%",
    },
    {
        type: "/Vintage440182",
        title: 'Vintage 440182',
        value: "60",
        quantity: "6",
        price: "135",
        url: "/images/catalogItemsImages/ryumkaimgs/Vintage440182.jpg",
        height: "50%",
    },
    {
        type: "/Amber440286",
        title: 'Amber 440286',
        value: "80",
        quantity: "6",
        price: "115",
        url: "/images/catalogItemsImages/ryumkaimgs/Amber440286.jpg",
        height: "50%",
    },
    {
        type: "/Bistro44164",
        title: 'Bistro 44164',
        value: "60",
        quantity: "6/12",
        price: "75/145",
        url: "/images/catalogItemsImages/ryumkaimgs/Bistro44164.jpg",
        height: "50%",
    },
    {
        type: "/Bingo42284",
        title: 'Bingo42284',
        value: "60",
        quantity: "6",
        price: "60",
        url: "/images/catalogItemsImages/ryumkaimgs/Bingo42284.png",
        height: "40%",
    },
    {
        type: "/Dalida440142",
        title: 'Dalida 440142',
        value: "60",
        quantity: "6",
        price: "95",
        url: "/images/catalogItemsImages/ryumkaimgs/Dalida440142.png",
        height: "40%",
    },
    {
        type: "/Side52837",
        title: 'Side 52837',
        value: "60",
        quantity: "6",
        price: "55",
        url: "/images/catalogItemsImages/ryumkaimgs/Side52837.png",
        height: "40%",
    },
    {
        type: "/Sylvana42244",
        title: 'Sylvana 42244',
        value: "60",
        quantity: "6",
        price: "65",
        url: "/images/catalogItemsImages/ryumkaimgs/Sylvana42244.png",
        height: "40%",
    },
    {
        type: "/Elysia520242",
        title: 'Elysia 520242',
        value: "60",
        quantity: "6",
        price: "110",
        url: "/images/catalogItemsImages/ryumkaimgs/Elysia520242.png",
        height: "40%",
    },
    {
        type: "/Luna42043",
        title: 'Luna 42043',
        value: "60",
        quantity: "6",
        price: "65",
        url: "/images/catalogItemsImages/ryumkaimgs/Luna42043.png",
        height: "40%",
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