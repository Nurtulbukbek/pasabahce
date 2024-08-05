import { Link } from "react-router-dom"
import "../styles/Catalog.css"
import Footer from "./Footer"

const cupsCatalog = [
    {
        type: "/vine",
        title: 'Бокалы для вина',
        url: "/images/catalogImages/vineCup.png",
        height: "65%",
    },
    {
        type: "/soda",
        title: 'Бокалы для напитков',
        url: "/images/catalogImages/sodaCup.png",
        height: "60%",
    },
    {
        type: "/ryumka",
        title: 'Рюмки',
        url: "/images/catalogImages/ryumka.png",
        height: "50%",
    },
    {
        type: "/decanter",
        title: 'Графины',
        url: "/images/catalogImages/decanter.png",
        height: "65%",
    },
    // {
    //     type: "/baking-dishes",
    //     title: 'Формы для запекания',
    //     url: "/images/catalogImages/bakingDishes.png",
    //     height: "50%",
    // },
    {
        type: "/beer",
        title: 'Бокалы для пива',
        url: "/images/catalogImages/beerCup.png",
        height: "65%",
    },
    {
        type: "/tea",
        title: 'Бокалы для чая',
        url: "/images/catalogImages/teaCup.png",
        height: "60%",
    },
    // {
    //     type: "/champagne",
    //     title: 'Фужеры для шампанского/коктейлей',
    //     url: "/images/catalogImages/champagne.png",
    //     height: "65%",
    // },
    {
        type: "/others",
        title: 'Другие',
        url: "/images/catalogImages/other.png",
        height: "50%",
    },
]

function Cups() {
    console.log(cupsCatalog)
    return(
        <>
            
            <div className="container">
            <p className="catalogTitle">Каталог</p>
                
                    <div className="cupItemContainer">
                        {cupsCatalog.map(cupCatalog => (
                            <div key={cupCatalog.type}>
                                <Link to={cupCatalog.type}>
                                    <div className="cupItem">
                                            <span>{cupCatalog.title}</span>
                                            <img src={cupCatalog.url} alt={cupCatalog.title} style={{height: `${cupCatalog.height}`}} />
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

export default Cups
