
import { Link } from "react-router-dom"
import SliderCatalog from "../components/SliderCatalog"
import Header from "../components/Header"
import Footer from "../components/Footer"

const cupCatalog = [
    {
        type: "/Aurora95834",
        title: 'Aurora 95834',
        value: "205mm",
        quantity: "1",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/Aurora95834.png",
        height: "50%",
    },
    {
        type: "/Basic55022",
        title: 'Basic 55022',
        value: "259ml",
        quantity: "1",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/Basic55022.jpg",
        height: "50%",
    },
    {
        type: "/Basic96814",
        title: 'Basic 96814',
        value: "500",
        quantity: "1",
        price: "68",
        url: "/images/catalogItemsImages/othersImages/Basic96814.jpg",
        height: "50%",
    },
    {
        type: "/Bistro54036",
        title: 'Bistro 54036',
        value: "105mm",
        quantity: "2",
        price: "25",
        url: "/images/catalogItemsImages/othersImages/Bistro54036.png",
        height: "50%",
    },
    {
        type: "/BlackWhite80030",
        title: 'BlackWhite 80030',
        value: "30ml",
        quantity: "2",
        price: "30",
        url: "/images/catalogItemsImages/othersImages/BlackWhite80030.png",
        height: "50%",
    },
    
    {
        type: "/Ceshni97424",
        title: 'Ceshni 97424',
        value: "500ml",
        quantity: "1",
        price: "35",
        url: "/images/catalogItemsImages/othersImages/Ceshni97424.png",
        height: "50%",
    },
    {
        type: "/Cesni97560",
        title: 'Cesni 97560',
        value: "920ml",
        quantity: "1",
        price: "40",
        url: "/images/catalogItemsImages/othersImages/Cesni97560.png",
        height: "50%",
    },
    {
        type: "/Flora43267",
        title: 'Flora 43267',
        value: "260mm",
        quantity: "1",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/Flora43267.png",
        height: "50%",
    },
    {
        type: "/Flora43966",
        title: 'Flora 43966',
        value: "260mm",
        quantity: "1",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/Flora43966.png",
        height: "50%",
    },
    {
        type: "/Homemade80383",
        title: 'Homemade 80383',
        value: "300ml",
        quantity: "1",
        price: "19",
        url: "/images/catalogItemsImages/othersImages/Homemade80383.png",
        height: "50%",
    },
    {
        type: "/Homemade80384",
        title: 'Homemade 80384',
        value: "500ml",
        quantity: "1",
        price: "24",
        url: "/images/catalogItemsImages/othersImages/Homemade80384.png",
        height: "50%",
    },
    {
        type: "/IceVilley51008",
        title: 'IceVilley 51008',
        value: "210ml",
        quantity: "3",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/IceVilley51008.png",
        height: "50%",
    },
    {
        type: "/IceVilley41016",
        title: 'IceVilley 41016',
        value: "625ml",
        quantity: "3/6",
        price: "65/120",
        url: "/images/catalogItemsImages/othersImages/IceVilley41016.png",
        height: "50%",
    },
    {
        type: "/IceVilley51068",
        title: 'IceVilley 51068',
        value: "170ml",
        quantity: "3",
        price: "65",
        url: "/images/catalogItemsImages/othersImages/IceVilley51068.png",
        height: "50%",
    },
    {
        type: "/Kanya54332",
        title: 'Kanya 54332',
        value: "310ml",
        quantity: "1",
        price: "45",
        url: "/images/catalogItemsImages/othersImages/Kanya54332.png",
        height: "50%",
    },
    {
        type: "/Karat96326",
        title: 'Karat 96326',
        value: "500ml",
        quantity: "1",
        price: "55",
        url: "/images/catalogItemsImages/othersImages/Karat96326.png",
        height: "50%",
    },
    {
        type: "/KitchenSlim96762",
        title: 'Kitchen Slim 96762',
        value: "860ml",
        quantity: "1",
        price: "50",
        url: "/images/catalogItemsImages/othersImages/KitchenSlim96762.png",
        height: "50%",
    },
    {
        type: "/KitchenSlim96763",
        title: 'Kitchen Slim 96763',
        value: "575ml",
        quantity: "1",
        price: "40",
        url: "/images/catalogItemsImages/othersImages/KitchenSlim96763.png",
        height: "50%",
    },
    {
        type: "/Kosem54076",
        title: 'Kosem 54076',
        value: "105mm",
        quantity: "2",
        price: "35",
        url: "/images/catalogItemsImages/othersImages/Kosem54076.png",
        height: "40%",
    },
    {
        type: "/Kremlin97624",
        title: 'Kremlin 97624',
        value: "740ml",
        quantity: "1",
        price: "45",
        url: "/images/catalogItemsImages/othersImages/Kremlin97624.png",
        height: "50%",
    },
    {
        type: "/Kremlin97626",
        title: 'Kremlin 97626',
        value: "1050ml",
        quantity: "1",
        price: "55",
        url: "/images/catalogItemsImages/othersImages/Kremlin97626.png",
        height: "50%",
    },
    {
        type: "/Lacy96136",
        title: 'Lacy 96136',
        value: "250mm",
        quantity: "1",
        price: "85",
        url: "/images/catalogItemsImages/othersImages/Lacy96136.png",
        height: "50%",
    },
    {
        type: "/Patissiere95117",
        title: 'Patissiere 95117',
        value: "342mm",
        quantity: "1",
        price: "150",
        url: "/images/catalogItemsImages/othersImages/Patissiere95117.png",
        height: "50%",
    },
    {
        type: "/Patissiere95200",
        title: 'Patissiere 95200',
        value: "322mm",
        quantity: "1",
        price: "275",
        url: "/images/catalogItemsImages/othersImages/Patissiere95200.png",
        height: "50%",
    },
    {
        type: "/Patissiere98259",
        title: 'Patissiere 98259',
        value: "280mm",
        quantity: "1",
        price: "135",
        url: "/images/catalogItemsImages/othersImages/Patissiere98259.png",
        height: "50%",
    },
    {
        type: "/Piknik54646",
        title: 'Piknik 54646',
        value: "310ml",
        quantity: "1",
        price: "70",
        url: "/images/catalogItemsImages/othersImages/Piknik54646.png",
        height: "50%",
    },
    {
        type: "/Timeless51759",
        title: 'Timeless 51759',
        value: "260ml",
        quantity: "2",
        price: "70",
        url: "/images/catalogItemsImages/othersImages/Timeless51759.png",
        height: "50%",
    },
    {
        type: "/Viva96374",
        title: 'Viva 96374',
        value: "900ml",
        quantity: "1",
        price: "-",
        url: "/images/catalogItemsImages/othersImages/Viva96374.png",
        height: "50%",
    },
    {
        type: "/Village43824",
        title: 'Village 43824',
        value: "1260ml",
        quantity: "1",
        price: "50",
        url: "/images/catalogItemsImages/othersImages/Village43824.png",
        height: "50%",
    },
    {
        type: "/Woody42338",
        title: 'Woody 42338',
        value: "860ml",
        quantity: "1",
        price: "70",
        url: "/images/catalogItemsImages/othersImages/Woody42338.png",
        height: "50%",
    },
]

function Others() {
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


export default Others