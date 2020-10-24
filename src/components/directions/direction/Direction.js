import React from 'react';

import './Direction.scss';

import group1 from './img/Group 1.svg';


class Direction extends React.Component{
    render() {
        return (
            <div className="direction-card">
                <div className="direction-card__title">Аренда жилой недвижимости</div>
                <div className="direction-card__box">
                    <div className="direction-card__box-inner">
                        <div className="direction-card__box-text">Руководитель</div>
                        <div className="direction-card__box-name">
                            Александр Смирнов
                        </div>
                        <div className="direction-card__box-phone">
                            <a href="tel:+7-495-199-19-99">+7 (495) 199-19-99</a>
                        </div>
                        <a className="direction-card__box-email" href="mailto:moscow@blitz.estate">
                            moscow@blitz.estate
                        </a>
                    </div>
                    <div className="direction-card__box-img">
                        <img src={group1} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Direction;