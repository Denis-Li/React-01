import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import r1 from './img/R1.jpg';
import r2 from './img/R2.jpg';
import r3 from './img/R3.jpg';

import './CarouselBox.scss';



class CarouselBox extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ r1 }
                            alt="apart 1"
                        />
                        <Carousel.Caption>
                            <h3 className="home__carousel-heading">Апартаменты в «Blitz Estate»</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ r2 }
                            alt="apart 2"
                        />
                        <Carousel.Caption>
                            <h3 className="home__carousel-heading">Апартаменты в «Город столиц»</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ r3 }
                            alt="apart 3"
                        />
                        <Carousel.Caption>
                            <h3 className="home__carousel-heading">Апартаменты в «Башне Око»</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export default CarouselBox;
