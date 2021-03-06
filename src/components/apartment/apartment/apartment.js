import React, { useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap';

function Apartment(props) {
    const [name, setName] = useState('')
    const [contactPhone, setConcatPhone] = useState('')
    const [popUp, setPopUp] = useState(false)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    // const [spinner, SetSpinner] = useState(false)

    const nameChangeHandler = (e) => {
        setName(e.target.value)

    }
    const telChangeHandler = (e) => {
        setConcatPhone(e.target.value)

    }


    const submitHandler = async (e) => {
        e.preventDefault();
        const dataCurrent = new Date().toLocaleString();
        // const form = await axios.post("/api/form", { "name": name, "phoneNumber": contactPhone, "data": dataCurrent })
        setLoading(true)
    setTimeout(() => {
        setShow(true)
        setLoading(false)
    }, 1000);
        function callFuncs() {
            let arrFunc = [setLoading(false), setPopUp(false)]
            setTimeout(arrFunc[0], 1000)
            setTimeout(arrFunc[1], 1000)
        }
        setTimeout(callFuncs, 3000)
    }
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
                {popUp ? (<div id="popup1" className="overlay">
                    <div className="popup">

                        <span className="close" onClick={() => setPopUp(!popUp)}>&times;</span>
                        <div className="popup-content">
                            <form onSubmit={submitHandler} className="callback_form">
                                <div className="title">Обратный звонок</div>
                                <div className="posttitle">
                                    Введите ваше имя и телефон <br />
                            И наш менеджер свяжется с Вами, <br />
                            чтобы ответить на Ваши вопросы  <br />
                                </div>
                                <span>Введите ваше имя</span>
                                <input onChange={nameChangeHandler} type="text" placeholder="Имя" />
                                <span>Введите ваш телефон</span>
                                <input onChange={telChangeHandler} type="text" placeholder="+7 (888) 888-88-88" />

                                {show ? <p className="send-mail">Ваше письмо отправлено, ожидайте звонка менеджера.</p> : null}
                                <button >Заказать звонок
                               {loading ? <Spinner animation="border" variant="primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner> : null}

                                </button>
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
