import React from 'react';
import facebook from './img/facebook.svg';
import youtube from './img/youtube.svg';
import instagram from './img/instagram.svg';
import logo from './img/logo-white.png';

import './Footer.scss';


class Footer extends React.Component{
    render() {
        return (
            <section className="section footer-classic context-dark bg-image" style={{background: "#535860", color: "#fff"}}>
                <div className="container">
                    <footer class="contacts__inner">
                        <div class="contacts__info">
                            <div class="contacts__info-box">
                                <p class="contacts__info-title">Время работы:</p>
                                <p class="contacts__info-text">Пн-Пт: 8:00-23:00, Сб-Вс: 9:00-21:00</p>
                            </div>
                            <div class="contacts__info-box">
                                <p class="contacts__info-title">Адрес:</p>
                                <p class="contacts__info-text">Пресненская набережная, дом 12 Башня "Федерация" Восток, 31 этаж, Офис Р</p>
                                <a class="contacts__info-email" href="mailto:moscow@blitz.estate">moscow@blitz.estate</a>
                            </div>
                            <div class="contacts__info-box">
                                <p class="contacts__info-title">Реквизиты:</p>
                                <p class="contacts__info-text">ОГРН: 1187746683464 ИНН: 7703462548</p>
                            </div>
                        </div>
                        <div class="contacts__logo">
                            <a class="contacts__logo-link" href="#">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div class="contacts__form">
                            <form>
                                <p class="contacts__form-text">Мы обязательно свяжемся с вами<br /> в течение двух рабочих дней</p>
                                <div class="contacts__form-line">
                                    <input class="contacts__form-input" placeholder="Ваше имя" type="text" />
                                    <input class="contacts__form-input" placeholder="Ваше e-mail" type="email" />
                                </div>
                                <textarea class="contacts__form-textarea" placeholder="Что вас интересует?"></textarea>
                                <button class="contacts__form-btn" type="submit">Отправить</button>
                            </form>
                        </div>
                        <ul class="contacts__social-list">
                            <li class="contacts__social-item">
                                <a class="contacts__social-link" href="#">
                                    <img src={facebook} alt="" />
                                </a>
                            </li>
                            <li class="contacts__social-item">
                                <a class="contacts__social-link" href="#">
                                    <img src={youtube} alt="" />
                                </a>
                            </li>
                            <li class="contacts__social-item">
                                <a class="contacts__social-link" href="#">
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

export default Footer;