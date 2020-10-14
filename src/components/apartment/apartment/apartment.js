import React from 'react'

function apartment(props) {
    return (
        <div className="apartaments-card">
            <div className="apartments-img">
                <img src={props.image}/>
            </div>
            <div className="apartments-card__inner">
                <div className="apartaments-card__title">{props.title}</div>
                <div className="apartaments-card__lot">{props.lot}</div>
                <div className="apartaments-card__info">
                    <div className="apartaments-card__price">{props.price} ₽</div>
                    <div className="apartaments-carf__area">Площадь {props.area} м²</div>
                </div>
                <div className="apartaments-card__desc">
                    <div className="apartaments-card__for">{props.priceForM} ₽ за м²</div>
                    <div className="apartaments-carf__floor">Этаж {props.floor}</div>
                </div>
            </div>
            <a href="" className="apartaments-select">Назначить просмотр</a>

        </div>
    )
}

export default apartment
