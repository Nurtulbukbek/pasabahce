import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
    {
        url: "https://images.unsplash.com/photo-1626201640519-4297dc851753?q=80&w=1379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: 'Прозрачность и красота.Стеклянные стаканы для вашего дома',
        text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению '
     },
      {
        url: 'https://images.unsplash.com/photo-1499950617211-a8609a16ad72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmslMjBjdXBzfGVufDB8fDB8fHww',
        caption: 'Хватит пить из одноразового! Выбери свой стаканчик!',
        text: 'Полуостров Камчатка расположен на крайнем востоке Советского Союза, примерно между широтами Киева и Ленинграда. Он вытянут в северо-восточном направлении и, по удачному сравнению '
    },
      {
        url: 'https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJpbmslMjBjdXBzfGVufDB8fDB8fHww',
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