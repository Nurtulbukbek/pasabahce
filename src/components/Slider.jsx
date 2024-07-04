import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    {
        url: "/images/sliderBackgrounds/slider-bg-img.avif",
        caption: 'Прозрачность и красота.Стеклянные стаканы для вашего дома',
        text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению '
     },
      {
        url: '/images/sliderBackgrounds/slider-bg-img3.png',
        caption: 'Хватит пить из одноразового! Выбери свой стаканчик!',
        text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению '
    },
      {
        url: '/images/sliderBackgrounds/slider-bg-img.avif',
        caption: 'Забудь о скучных стаканах!',
        text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению ',
      },
];


function Slider() {

    return(
        <>
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div key={index}>
                <div className='slider' style={{backgroundImage: `url(${slideImage.url})`, height: "80vh"}}>
                   <div className=""> 
                        <h1 className='slide-h1 slide-text'>{slideImage.caption}</h1>
                        <h3 className='slide-h3 slide-text'>{slideImage.text}</h3>
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