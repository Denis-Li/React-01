import React from 'react';
import facebook from './img/facebook.svg';
import youtube from './img/youtube.svg';
import instagram from './img/instagram.svg';

import './Footer.scss';


class Footer extends React.Component{
    render() {
        return (
            <section className="section footer-classic context-dark bg-image" style={{background: "#535860", color: "#fff"}}>
                <div data-menuanchor="contacts" className="page-section contacts">
                    <div className="page-section__wrapper">
                    <div className="container">
                        <footer class="contacts__inner">
                            <div class="contacts__info">

                                <div class="contacts__info-box">
                                <p class="contacts__info-title">Время работы:</p>
                                <a class="contacts__info-phone" href="tel:+80505676767">Пн-Пт: 8:00-23:00,</a>
                                <a class="contacts__info-email" href="mailto:dgi.mavic2pro.kiev@mail.ru">Сб-Вс: 9:00-21:00</a>
                                </div>
                                <div class="contacts__info-box">
                                <p class="contacts__info-title">Адрес:</p>
                                <a class="contacts__info-phone" href="tel:+74995676767">Пресненская набережная, дом 12 Башня</a>
                                <a class="contacts__info-email" href="mailto:dgi.mavic2pro.moscow@mail.ru">"Федерация" Восток, 31 этаж, Офис Р</a>
                                </div>
                                <div class="contacts__info-box">
                                <p class="contacts__info-title">Реквизиты:</p>
                                <a class="contacts__info-phone" href="tel:+375175676767">ОГРН: 1187746683464</a>
                                <a class="contacts__info-email" href="mailto:dgi.mavic2pro.minsk@mail.ru">ИНН: 7703462548</a>
                                </div>

                            </div>
                            <div class="contacts__form">
                                <form>
                                    <h4 class="contacts__form-title">Продажа недвижимости в Москва-Сити</h4>
                                    <p class="contacts__form-text">Мы обязательно свяжемся с вами в течение двух рабочих дней</p>
                                    <div class="contacts__form-line">
                                        <input class="contacts__form-input" placeholder="Ваше имя" type="text" />
                                        <input class="contacts__form-input" placeholder="Ваше e-mail" type="email" />
                                    </div>
                                    <textarea class="contacts__form-textarea" placeholder="Что вас интересует?"></textarea>
                                    <button class="contacts__form-btn" type="submit">ОТПРАВИТЬ</button>
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
                    </div>

                </div>
            </section>
        )
    }
}

export default Footer;