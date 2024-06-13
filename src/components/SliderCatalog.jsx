import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'public/images/sliderBackgrounds/slider-bg-img3.png',
    caption: 'Прозрачность и красота.Стеклянные стаканы для вашего дома',
    text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению '
 },
  {
    url: 'public/images/sliderBackgrounds/slider-bg-img3.png',
    caption: 'test slide 2'
  },
  {
    url: 'public/images/sliderBackgrounds/slider-bg-img.avif',
    caption: 'test slide 3'
  },
];


function SliderCatalog() {

    return(
        <>
        <Slide> 
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='slider' style={{backgroundImage: `url(${slideImage.url})`, height: '80vh'}}>
                <div className="">
                    <h1 className='slide-h1 slide-text'>{slideImage.caption}</h1>
                    <h3 className='slide-h3 slide-text'>{slideImage.text}</h3>
                </div>
              </div>
            </div>
          ))} 
        </Slide>
        </>
    )
}

export default SliderCatalog