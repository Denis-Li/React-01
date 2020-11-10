import React from 'react';
import './Home.scss';

import CarouselBox from './components/assets/CarouselBox';
import MapSvg from './components/assets/MapSvg';


class Home extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }

    render() {
        return (
            <section className = "home">
                <div className="container">
                    <div className="home__heading">
                        <h2 className="home__heading-title">Blitz Estate - на рынке недвижимости с 2008 года</h2>
                    </div>
                    <CarouselBox />
                    <p className="home__text">Blitz Estate – международная компания по управлению недвижимостью и финансами. Основана в 2008 г. в Австрии. На сегодня представлена в Англии, Испании, Латвии, ОАЭ, Австрии и России, кроме того имеет партнерскую сеть более чем в десяти странах мира.
                    Мы предоставляем услуги полного цикла по приобретению и продаже недвижимости и управлению активами, предоставляя клиентам неизменно высокое качество сервиса. Наш подход позволяет оптимизировать инвестиционный портфель, диверсифицировать риски и обеспечить полную конфиденциальность сделки.
                    </p>
                    <div className="home__heading">
                        <h2 className="home__heading-title">Наши представительства в России</h2>
                    </div>
                    <MapSvg />
                </div>
            </section>
        );
    }
}

export default Home;
