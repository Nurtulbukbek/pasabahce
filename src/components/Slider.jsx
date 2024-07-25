import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    {
        url: "https://i.pinimg.com/564x/a5/95/85/a59585e08e9bed3050cc7fe1f74597b0.jpg",
        caption: 'Прозрачность и красота.Стеклянные стаканы для вашего дома',
     },
      {
        url: 'https://i.pinimg.com/564x/aa/2d/91/aa2d911dc3a5bbee31e293586e8d9673.jpg',
        caption: 'Хватит пить из одноразового! Выбери свой стаканчик!',
    },
      {
        url: 'https://i.pinimg.com/564x/83/2d/4e/832d4e10d4dec05262aef16f4e5cd8d2.jpg',
        caption: 'Забудь о скучных стаканах!',
      },
];


function Slider() {

    return(
        <>
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <div className='slider' style={{backgroundImage: `url(${slideImage.url})`}}>
                   <div className=""> 
                        <h1 className='slide-h1 slide-text'>{slideImage.caption}</h1>
                    </div> 
                    <Link to="/catalog" className="slider-button">Перейти в каталог</Link>
                </div>
                </div>
            ))} 
            </Slide>
        </>
    )
}

export default Slider