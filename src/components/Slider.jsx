import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    {
        url: "/images/sliderBackgrounds/glassCupsSliderBackground.jpg",
        caption: 'Прозрачность и красота.Стеклянные стаканы для вашего дома',
     },
      {
        url: '/images/sliderBackgrounds/unregulariceCoffeeCups.jpg',
        caption: 'Хватит пить из одноразового! Выбери свой стаканчик!',
    },
      {
        url: '/images/sliderBackgrounds/iceCoffeeCupsBackGround.jpg',
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