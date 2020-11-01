import React from 'react';
import './DirectionsTabs.scss';

import Directions from './Directions';
import Rent from './Rent';
import Sale from './Sale';
import Investment from './Investment';


class DirectionsTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0}
    }
    
   
    render() {
        return (
            <section className = "directions" >
                <div className="container">
                    <h2 className="directions__heading">Направления нашего агентства</h2>
                    <div className="directions__tabs">
                        <a className="directions__tab tab--active" onClick={() => this.setState({tabIndex: 0})}>Все</a>
                        <a className="directions__tab" onClick={() => this.setState({tabIndex: 1})}>Аренда</a>
                        <a className="directions__tab" onClick={() => this.setState({tabIndex: 2})}>Продажа</a>
                        <a className="directions__tab" onClick={() => this.setState({tabIndex: 3})}>Инвестиции</a>

                        {[<Directions />, <Rent />, <Sale />, <Investment />][this.state.tabIndex]}
                    </div>
                </div>
            </section>
        )
    }
}

export default DirectionsTabs;