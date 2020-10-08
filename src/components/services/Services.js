import React from 'react';
import './Services.scss';


class Services extends React.Component{
    render() {
        return (
            <section class="insp">
				<div class="container">
					<h2 class="section-title section-title--center insp_heading">Inspirations</h2>
					<p class="insp_descr">The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce
						Canyon National Park ranks as three of the most magnificent & awe inspiring.</p>
					<ul class="grid insp_list">
						<li class="insp_item insp_item--big insp_item--1">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">A Guide To Rocky Mountain Vacations</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--2">
							<button class="btn-reset insp_play" aria-label="Play video"></button>
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Traveling To Barcelona</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--bigheight insp_item--3">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Party Jokes Startling But Unnecessary</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--bigheight insp_item--4">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Maui By Air The Best Way Around The Island</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--bigheight insp_item--5">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Man cannot discover new oceans unless he has the courage to lose sight of the shore.</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--6">
							<button class="btn-reset insp_play" aria-label="Play video"></button>
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">Traveling To Barcelona</a>
								</h3>
							</div>
						</li>
						<li class="insp_item insp_item--big insp_item--7">
							<div class="insp_text">
								<a href="#" class="insp_category">Destinations</a>
								<h3 class="insp_title">
									<a href="#">A Guide To Rocky Mountain Vacations</a>
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