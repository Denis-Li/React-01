import React from 'react';
import './Services.scss';
import './ServicesMedia.scss';


class Services extends React.Component{
    render() {

		function f1() {
			document.querySelector('.services__play').innerHTML = "tel:+7-495-199-19-99";

		}

        return (
            <section className="services">
				<div className="container">
					<h2 className="services__heading">Наши услуги на международном рынке</h2>
					<ul className="grid services__list">
						<li className="services__item services__item--bigheight services__item--1">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/apartments">Жилая недвижимость</a>
								</h3>
								<p className="services__category">Сопровождение сделок по продаже, купли и аренде объектов недвижимости под ключ.</p>
							</div>
							<button className="btn-reset services__play" onClick={() => f1()}>Узнать больше</button>
						</li>
						<li className="services__item services__item--2">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/directions">Доходная недвижимость</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--3">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/directions">Инвестиционные операции</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--big services__item--4">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/apartments">Покупка яхт</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--big services__item--5">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/directions">Доверительное управление</a>
								</h3>
							</div>
						</li>
						<li className="services__item services__item--6">
							<div className="services__text">
								<h3 className="services__title">
									<a href="/React-01/directions">Консьерж сервис</a>
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