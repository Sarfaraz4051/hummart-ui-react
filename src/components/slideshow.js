import React from "react";
import Carousel from "react-bootstrap/Carousel";
const slideImages = [
    'slides/pic3.jpg',
    'slides/pic4.jpg',
    'slides/pic5.jpg',
    'slides/pic6.jpg',
    'slides/pic7.jpg',
    'slides/pic8.jpg',
    'slides/pic9.jpg',
    'slides/pic10.jpg',
    'slides/pic11.jpg'
];
const Slidesshow = () => {
    return (
        <div>
            <Carousel>
                {
                    slideImages.map((slideIm, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <>
                                    <img
                                        className="d-block"
                                        src={slideIm}
                                        alt={`brand-${index}`}
                                    />
                                    {/* <Carousel.Caption>
                                        <p>Image-1</p>
                                    </Carousel.Caption>*/}
                                </>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
};
export default Slidesshow;