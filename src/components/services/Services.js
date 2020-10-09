import React from 'react';
import './Services.scss';


class Services extends React.Component{
    render() {
        return (
            <section className="services">
				<div className="container">
					<h2 className="services__heading">Наши услуги на международном рынке</h2>
					<ul className="grid services__list">
						<li className="services__item services__item--bigheight services__item--1">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Жилая недвижимость</a>
								</h3>
								<a href="#" className="services__category">Сопровождение сделок по продаже, купли и аренде объектов недвижимости под ключ.</a>
							</div>
							<button className="btn-reset services__play">Узнать больше</button>
						</li>
						<li className="services__item services__item--2">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Доходная недвижимость</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--3">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Инвестиционные операции</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--big services__item--4">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Покупка яхт</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--big services__item--5">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Доверительное управление</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--6">
							<div className="services__text">
								<h3 className="services__title">
									<a href="#">Консьерж сервис</a>
								</h3>
							</div>
						</li>
					</ul>
				</div>
			</section>
        )
    }
}

export default Services;