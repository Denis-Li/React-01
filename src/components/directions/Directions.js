import React from 'react';
import './Directions.scss';

import Direction from './direction/Direction';
import Tabs from './tabs/Tabs';

class Directions extends React.Component{
    render() {
        return (
            <section className="directions">
				<div className="container">
					<h2 className="directions__heading">Направления нашего агентства</h2>
					<Tabs /*activeItem={this.props.index} onClickItem={this.props.onSetCategoryIndex} items={categoryNames}*/ />
                    <div className="directions__box">
                        <Direction />
                        {/* {direction} */}
                    </div>
				</div>
			</section>
        )
    }
}

export default Directions;