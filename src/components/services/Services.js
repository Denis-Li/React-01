import React from 'react';
import './Services.scss';


class Services extends React.Component{
    render() {
        return (
            <section className="services">
				<div className="container">
					<h2 className="services__heading">Наши услуги на международном рынке</h2>
					<ul class="grid services__list">
						<li class="services__item services__item--bigheight services__item--1">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">A Guide To Rocky Mountain Vacations</a>
								</h3>
							</div>
						</li>
						<li class="services__item services__item--2">
							<button class="btn-reset insp_play" aria-label="Play video"></button>
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Traveling To Barcelona</a>
								</h3>
							</div>
						</li>
						<li class="services__item services__item--3">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Party Jokes Startling But Unnecessary</a>
								</h3>
							</div>
						</li>
						<li class="services__item services__item--big services__item--4">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Maui By Air The Best Way Around The Island</a>
								</h3>
							</div>
						</li>
						<li class="services__item services__item--big services__item--5">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Man cannot discover new oceans unless he has the courage to lose sight of the shore.</a>
								</h3>
							</div>
						</li>
						<li class="services__item services__item--6">
							<button class="btn-reset insp_play" aria-label="Play video"></button>
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Traveling To Barcelona</a>
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