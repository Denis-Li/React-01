import React from 'react';
import './header.scss';
import menu from './img/menu.png';
import logo from './img/logo.png';
import brand from './img/brand.png';
import testIcon from './img/test-icon.svg';
import Nav from '../navigation/NavigationList';


class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                <Nav />
                    <div className="header-top">
                        <div className="header-top__inner">
                            <div className="header-top__menu">
                                <a href=""><img className="header-menu" src={menu} alt="" /></a>
                                <div className="header-top__text">Menu</div>
                            </div>

                            <div className="header-top__logo">
                                <a href="/"><img className="header-logo"  src={logo} alt="" /></a>
                                <a href="/"><img className="header-brand"  src={brand} alt="" /></a>
                                <div className="logo-text">Продажа недвижимости в Москва-Сити</div>
                            </div>
                            <div className="header-top__phone">
                                <a href="tel:+7-495-199-19-99">+7 (495) 199-19-99 </a>
                            </div>
                            <a className="header-call__button" href="">Заказать звонок</a>
                        </div>
                    </div>
                    <div className="header-main">
                        <div className="header-main__inner">
                            <h1 className="header-title">
                                Агентство <br />
                                с международным
                                именем Blitz Estate
                            </h1>
                            <div className="header-main__subtitle">
                                Поможем продать, купить и арендовать недвижимость в Москве, районе Сити и области
                             </div>
                            <div className="header-main__box">
                                <div className="header__box-item">
                                    <div className="box-number">17</div>
                                    <div className="box-text">Работаем в 17 странах</div>
                                </div>
                                <div className="header__box-item">
                                    <div className="box-number">1963</div>
                                    <div className="box-text">Помогли 1963-м клиентам</div>
                                </div>
                                <div className="header__box-item">
                                    <div className="box-number">10</div>
                                    <div className="box-text">Лет на рынке недвижимости</div>
                                </div>
                            </div>
                        </div>
                        <div className="header-main__test">
                            <img className="test-img" src={testIcon} />
                            <div className="test-text">Пройди тест и получи в подарок бутылку шампанского <span>Veuve Clicquot</span></div>
                        </div>
                    </div>
                    <button className="header-button">Подобрать недвижимость</button>
                </div>

            </header>
        )
    }
}

export default Header;
