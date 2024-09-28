

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
        url: "/images/catalogItemsImages/sodaimgs/Casablanca52707.jpg",
        height: "50%",
    },
    {
        type: "/Snap41632",
        title: 'Snap 41632',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 3",
        price: "Цена: 65TMT",
        url: "/images/catalogItemsImages/sodaimgs/Snap41632.jpg",
        height: "50%",
    },
    {
        type: "/Leia420174",
        title: 'Leia 420174',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 100TMT",
        url: "/images/catalogItemsImages/sodaimgs/Leia420174.jpg",
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
        type: "/Allegra410536",
        title: 'Allegra 410536',
        value: "Объем: 355ml",
        quantity: "К/л в упаковке: 1",
        price: "Цена: 16TMT",
        url: "/images/catalogItemsImages/sodaimgs/Allegra410536.jpg",
        height: "50%",
    },
    {
        type: "/Allegra420015",
        title: 'Allegra 420015',
        value: "Объем: 470ml",
        quantity: "К/л в упаковке: 1",
        price: "Цена: 17TMT",
        url: "/images/catalogItemsImages/sodaimgs/Allegra420015.jpg",
        height: "50%",
    },
    {
        type: "/Elysia520015",
        title: 'Elysia 520015',
        value: "Объем: 435ml",
        quantity: "К/л в упаковке: 4",
        price: "Цена: 170TMT",
        url: "/images/catalogItemsImages/sodaimgs/Elysia520015.jpg",
        height: "50%",
    },
    {
        type: "/Elysia5200014",
        title: 'Elysia 5200014',
        value: "Объем: 210ml",
        quantity: "К/л в упаковке: 4",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Elysia5200014.jpg",
        height: "50%",
    },
    {
        type: "/Elysia520004",
        title: 'Elysia 520004',
        value: "Объем: 355ml",
        quantity: "К/л в упаковке: 1",
        price: "Цена: 30TMT",
        url: "/images/catalogItemsImages/sodaimgs/Elysia520004.jpg",
        height: "50%",
    },
    {
        type: "/Timeless52800",
        title: 'Timeless 52800',
        value: "Объем: 450ml",
        quantity: "К/л в упаковке: 1",
        price: "Цена: 35TMT",
        url: "/images/catalogItemsImages/sodaimgs/Timeless52800.jpg",
        height: "50%",
    },
    {
        type: "/Timeless52820",
        title: 'Timeless 52820',
        value: "Объем: 295ml",
        quantity: "К/л в упаковке: 4",
        price: "Цена: 125TMT",
        url: "/images/catalogItemsImages/sodaimgs/Timeless52820.jpg",
        height: "50%",
    },
    {
        type: "/Timeless51790",
        title: 'Timeless 51790',
        value: "Объем: 355ml",
        quantity: "К/л в упаковке: 1",
        price: "Цена: 28TMT",
        url: "/images/catalogItemsImages/sodaimgs/Timeless51790.jpg",
        height: "50%",
    },
    {
        type: "/Timeless52810",
        title: 'Timeless 52810',
        value: "Объем: 210ml",
        quantity: "К/л в упаковке: 4",
        price: "Цена: 100TMT",
        url: "/images/catalogItemsImages/sodaimgs/Timeless52810.jpg",
        height: "50%",
    },
    {
        type: "/Sylvana42812",
        title: 'Sylvana 42812',
        value: "Объем: 380ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 110TMT",
        url: "/images/catalogItemsImages/sodaimgs/Sylvana42812.jpg",
        height: "50%",
    },
    {
        type: "/Sylvana42415",
        title: 'Sylvana 42415',
        value: "Объем: 315ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 100TMT",
        url: "/images/catalogItemsImages/sodaimgs/Sylvana42415.jpg",
        height: "50%",
    },
    {
        type: "/Dance42868",
        title: 'Dance 42868',
        value: "Объем: 320ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 100TMT",
        url: "/images/catalogItemsImages/sodaimgs/Dance42868.jpg",
        height: "50%",
    },
    {
        type: "/Dance42865",
        title: 'Dance 42865',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 85TMT",
        url: "/images/catalogItemsImages/sodaimgs/Karat52885.jpg",
        height: "50%",
    },
    {
        type: "/Amorf420224",
        title: 'Amorf 420224',
        value: "Объем: 340ml",
        quantity: "К/л в упаковке: 4",
        price: "Цена: 110TMT",
        url: "/images/catalogItemsImages/sodaimgs/Amorf420224.jpg",
        height: "50%",
    },
    {
        type: "/Pleasure420103",
        title: 'Pleasree 420103',
        value: "Объем: 330ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Pleasure420103.jpg",
        height: "50%",
    },
    {
        type: "/Karat52882",
        title: 'Karat 52882',
        value: "Объем: 250ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 68TMT",
        url: "/images/catalogItemsImages/sodaimgs/Karat52882.jpg",
        height: "50%",
    },
    {
        type: "/Bis tro44872",
        title: 'Bistro 44872',
        value: "Объем: 380ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 125TMT",
        url: "/images/catalogItemsImages/sodaimgs/Bistro44872.jpg",
        height: "50%",
    },
    {
        type: "/Soda52704",
        title: 'Soda 52704',
        value: "Объем: 355ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 115TMT",
        url: "/images/catalogItemsImages/sodaimgs/Soda52704.jpg",
        height: "50%",
    },
    {
        type: "/Aquatic42975",
        title: 'Aquatic 42975',
        value: "Объем: 310ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 90TMT",
        url: "/images/catalogItemsImages/sodaimgs/Aquatic42975.png",
        height: "50%",
    },
    {
        type: "/Basic55531",
        title: 'Basic 55531',
        value: "Объем: 350ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 114TMT",
        url: "/images/catalogItemsImages/sodaimgs/Basic55531.png",
        height: "50%",
    },
    {
        type: "/Basic520102",
        title: 'Basic 520102',
        value: "Объем: 250ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 110TMT",
        url: "/images/catalogItemsImages/sodaimgs/Basic520102.png",
        height: "50%",
    },
    {
        type: "/Bingo440511",
        title: 'Bingo 440511',
        value: "Объем: 290ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 70TMT",
        url: "/images/catalogItemsImages/sodaimgs/Bingo440511.png",
        height: "50%",
    },
    {
        type: "/Allegra41536",
        title: 'Allegra 41536',
        value: "Объем: 425ml",
        quantity: "К/л в упаковке: 12",
        price: "Цена: 216TMT",
        url: "/images/catalogItemsImages/sodaimgs/Allegra41536.png",
        height: "50%",
    },
    {
        type: "/Kosem42083",
        title: 'Kosem42083',
        value: "Объем: 285ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 85TMT",
        url: "/images/catalogItemsImages/sodaimgs/Kosem42083.png",
        height: "50%",
    },
    {
        type: "/Luna42338",
        title: 'Luna42338',
        value: "Объем: 265ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 90TMT",
        url: "/images/catalogItemsImages/sodaimgs/Luna42338.png",
        height: "50%",
    },
    {
        type: "/Luna42348",
        title: 'Luna 42348',
        value: "Объем: 365ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Luna42348.png",
        height: "50%",
    },
    {
        type: "/Luna42378",
        title: 'Luna42358',
        value: "Объем: 390ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Luna42358.png",
        height: "50%",
    },
    {
        type: "/Luna42378",
        title: 'Luna 42378',
        value: "Объем: 250ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 85TMT",
        url: "/images/catalogItemsImages/sodaimgs/Luna42378.png",
        height: "50%",
    },
    {
        type: "/Pleasure420103",
        title: 'Pleasure420103',
        value: "Объем: 330ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 125TMT",
        url: "/images/catalogItemsImages/sodaimgs/Pleasure420103.jpg",
        height: "50%",
    },
    {
        type: "/Side42253",
        title: 'Side 42253',
        value: "Объем: 350ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Side42253.png",
        height: "50%",
    },
    {
        type: "/Side42435",
        title: 'Side 42435',
        value: "Объем: 210ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 85TMT",
        url: "/images/catalogItemsImages/sodaimgs/Side42435.png",
        height: "50%",
    },
    {
        type: "/Side42884",
        title: 'Side 42884',
        value: "Объем: 305ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 120TMT",
        url: "/images/catalogItemsImages/sodaimgs/Side42884.png",
        height: "50%",
    },
    {
        type: "/Tango42949",
        title: 'Tango42949',
        value: "Объем: 440ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 75TMT",
        url: "/images/catalogItemsImages/sodaimgs/Tango42949.png",
        height: "50%",
    },
    {
        type: "/Valse41536",
        title: 'Valse 41536',
        value: "Объем: 315ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 85TMT",
        url: "/images/catalogItemsImages/sodaimgs/Valse41536.png",
        height: "50%",
    },
    {
        type: "/Valse42949",
        title: 'Valse 42949',
        value: "Объем: 440ml",
        quantity: "К/л в упаковке: 6",
        price: "Цена: 90TMT",
        url: "/images/catalogItemsImages/sodaimgs/Valse42949.png",
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