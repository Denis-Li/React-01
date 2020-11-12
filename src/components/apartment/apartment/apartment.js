import React, { useState } from 'react'

function Apartment(props) {
    const [popUp, setPopUp] = useState(false)

    return (
        <div className="apartaments-card">
            <div className="apartments-img">
                <img src={props.image} alt="property" />
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
                {popUp ? (<div id="popup1"   className="overlay">
                    <div className="popup">
                        
                        <span className="close" onClick={() => setPopUp(!popUp)}>&times;</span>
                        <div className="popup-content">
                            <form action="" class="callback_form">
                            <div class="title">Обратный звонок</div>
                            <div class="posttitle">
                                Введите ваше имя и телефон <br />
                            И наш менеджер свяжется с Вами, <br />
                            чтобы ответить на Ваши вопросы  <br />
                            </div>
                            <span>Введите ваше имя</span>
                            <input type="text" placeholder="Имя" />
                            <span>Введите ваш телефон</span>
                            <input type="text" placeholder="+7 (888) 888-88-88" />
                            <button>Заказать звонок</button>
  </form>
                    </div>
                </div>
                </div>) : null}
            <div className="apartaments-card__button">
                <span onClick={() => setPopUp(!popUp)} className="apartaments-card__button-view">Назначить просмотр</span>
                <span onClick={() => props.clicked(props)} className="apartaments-card__button-add">Добавить в корзину</span>
            </div>
        </div>


        </div >
    )
}

export default Apartment
