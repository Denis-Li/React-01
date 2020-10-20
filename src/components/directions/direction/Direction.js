import React from 'react'
import group1 from './img/Group 1.svg';
import group2 from './img/Group 2.svg';


class Direction extends React.Component{
    render() {
        return (
            <div className="direction-card">
                <div className="direction-card__title"></div>
                <div className="direction-card__inner">
                    <div className="direction-card__border">
                        <img src={group2} alt="" />
                    </div>
                    <div className="direction-card__inner">
                        <div className="apartaments-card__lot"></div>
                        <div className="apartaments-card__info">
                            <div className="apartaments-card__price"></div>
                            <div className="apartaments-carf__area"></div>
                        </div>
                        <div className="apartaments-card__desc">
                            <div className="apartaments-card__for"></div>
                            <div className="apartaments-carf__floor"></div>
                        </div>
                    </div>
                    <div className="direction-card__img">
                        <img src={group1} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Direction;