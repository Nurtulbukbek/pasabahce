



import Header from "/src/components/Header"
import SliderCatalog from "../../components/SliderCatalog";
import "/src/styles/Gallery.css"

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import Footer from "../../components/Footer";



function Example(props) {
    const [open, setOpen] = React.useState(false);

    return(
        <>
            
            <Header/>
            <SliderCatalog/>
            <div className="container">
                <p className="catalogTitle">{props.name}</p>
                <div className="gallery">
                    <div className="galleryImage1 galleryImage" onClick={() => setOpen(true)}>
                        <img src={props.photo1} alt="" />
                    </div>
                    <div className="galleryImage2 galleryImage" onClick={() => setOpen(true)}>
                        <img src={props.photo2} alt="" />
                    </div>
                    <div className="galleryImage3 galleryImage" onClick={() => setOpen(true)}>
                        <img src={props.photo3} alt="" />
                    </div>
                    <div className="galleryImage4 galleryImage" onClick={() => setOpen(true)}>
                        <img src={props.photo4} alt="" />
                    </div>
                    
                </div>
                <div className="galleryInfo">
                    <div className="price">
                        {props.price} TMT
                    </div>
                </div>
            </div>

            <Footer/>

                <Lightbox
                plugins={[Counter]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                open={open}
                close={() => setOpen(false)}
                
                slides={[
                        { src: props.photo1,  },
                        { src: props.photo2,  },
                        { src: props.photo3, },
                        { src: props.photo4,  },
                  ]}
            />
            
        </>
    )
}

export default Example
