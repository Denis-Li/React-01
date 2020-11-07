import React from 'react';
import facebook from './img/facebook.svg';
import youtube from './img/youtube.svg';
import instagram from './img/instagram.svg';
import logo from './img/logo-white.png';

// import Contacts from './Contacts';

import './Footer.scss';


export default class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <section className="section footer-classic context-dark bg-image" style={{background: "#535860", color: "#fff"}}>
                <div className="container">
                    <footer className="contacts__inner">
                        <div className="contacts__info">
                            <div className="contacts__info-box">
                                <p className="contacts__info-title">Время работы:</p>
                                <p className="contacts__info-text">Пн-Пт: 8:00-23:00, Сб-Вс: 9:00-21:00</p>
                            </div>
                            <div className="contacts__info-box">
                                <p className="contacts__info-title">Адрес:</p>
                                <p className="contacts__info-text">Пресненская набережная, дом 12 Башня "Федерация" Восток, 31 этаж, Офис Р</p>
                                <a className="contacts__info-email" href="mailto:moscow@blitz.estate">moscow@blitz.estate</a>
                            </div>
                            <div className="contacts__info-box">
                                <p className="contacts__info-title">Реквизиты:</p>
                                <p className="contacts__info-text">ОГРН: 1187746683464 ИНН: 7703462548</p>
                            </div>
                        </div>
                        <div className="contacts__logo">
                            <a className="contacts__logo-link" href="/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="contacts__form">
                            <form>
                                <p className="contacts__form-text">Мы обязательно свяжемся с вами<br /> в течение двух рабочих дней</p>
                                <div className="contacts__form-line">
                                    <input className="contacts__form-input" placeholder="Ваше имя" type="text" onChange={this.handleChange} />
                                    <input className="contacts__form-input" placeholder="Ваше e-mail" type="email" />
                                </div>
                                <textarea className="contacts__form-textarea" placeholder="Что вас интересует?"></textarea>
                                <button className="contacts__form-btn" type="submit">Отправить</button>
                            </form>
                        </div>
                        {/* <Contacts /> */}
                        <ul className="contacts__social-list">
                            <li className="contacts__social-item">
                                <a className="contacts__social-link" target="_blank" href="https://www.facebook.com/">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li className="contacts__social-item">
                                <a className="contacts__social-link" target="_blank" href="https://www.youtube.com/">
                                    <img src={youtube} alt="" />
                                </a>
                            </li>
                            <li className="contacts__social-item">
                                <a className="contacts__social-link" target="_blank" href="https://www.instagram.com/">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </section>
        )
    }
}
