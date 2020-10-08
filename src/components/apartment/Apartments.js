import React from 'react'
import './Apartments.scss'
import apartPhoto from './img/apart-photo.jpg';
import apartPhoto_1 from './img/apart-photo1.png';




function Apartments() {
    return (
        <section className="apartments">
            <div className="container">
                <h2 className="apartment-title">Выберите апартаменты в Москва-Сити
                <h4 className="apartment-subtitle">Мы включили в наш каталог все апартаменты доступные для покупки в Москва-Сити</h4>
                </h2>
                <ul className="apartments-sort__list">
                    <li className="apartments-item">Показать все</li>
                    <li className="apartments-item">От 20-30 млн</li>
                    <li className="apartments-item">От 30-50 млн</li>
                    <li className="apartments-item">От 50-100 млн</li>
                    <li className="apartments-item">Более 100 млн</li>
                </ul>
                <div className="apartments-box">
                    <div className="apartaments-card">
                        <div className="apartments-img">
                            <img src={apartPhoto} alt=""/>
                        </div>
                        <div className="apartments-card__inner">
                            <div className="apartaments-card__title">Апартаменты в «башне ОКО»</div>
                            <div className="apartaments-card__lot">Лот № 4536</div>
                            <div className="apartaments-card__info">
                                <div className="apartaments-card__price">25 600 000 ₽</div>
                                <div className="apartaments-carf__area">Площадь 70 м²</div>
                            </div>
                            <div className="apartaments-card__desc">
                                <div className="apartaments-card__for">365 714 ₽ за м²</div>
                                <div className="apartaments-carf__floor">Этаж 52</div>
                            </div>
                        </div>
                        <a href="" className="apartaments-select">Назначить просмотр</a>

                    </div>
                    <div className="apartaments-card">
                        <div className="apartments-img">
                            <img src={apartPhoto_1} alt=""/>
                        </div>
                        <div className="apartments-card__inner">
                            <div className="apartaments-card__title">Апартаменты в «башне ОКО»</div>
                            <div className="apartaments-card__lot">Лот № 4536</div>
                            <div className="apartaments-card__info">
                                <div className="apartaments-card__price">25 600 000 ₽</div>
                                <div className="apartaments-carf__area">Площадь 70 м²</div>
                            </div>
                            <div className="apartaments-card__desc">
                                <div className="apartaments-card__for">365 714 ₽ за м²</div>
                                <div className="apartaments-carf__floor">Этаж 52</div>
                            </div>
                        </div>
                        <a href="" className="apartaments-select">Назначить просмотр</a>

                    </div>
               
               
                </div>
            </div>

        </section>
    )
}

export default Apartments
