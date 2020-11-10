import React from 'react';
import './DirectionsTabs.scss';

import Directions from './Directions';
import Rent from './Rent';
import Sale from './Sale';
import Investment from './Investment';


class DirectionsTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0,
            direc: []
        }
    }
    
    componentDidMount() {
        fetch('https://exchange-9bcd3.firebaseio.com/directions.json')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({ direc: data });
            });
    }
   
    render() {
        return (
            <section className = "directions">
                <div className="container">
                    <h2 className="directions__heading">Направления нашего агентства</h2>
                    <ul className="directions__tabs">
                        <li className={this.state.tabIndex === 0 ? "directions__tab tab--active" : "directions__tab"} onClick={() => this.setState({tabIndex: 0})}>Все</li>
                        <li className={this.state.tabIndex === 1 ? "directions__tab tab--active" : "directions__tab"} onClick={() => this.setState({tabIndex: 1})}>Аренда</li>
                        <li className={this.state.tabIndex === 2 ? "directions__tab tab--active" : "directions__tab"} onClick={() => this.setState({tabIndex: 2})}>Продажа</li>
                        <li className={this.state.tabIndex === 3 ? "directions__tab tab--active" : "directions__tab"} onClick={() => this.setState({tabIndex: 3})}>Инвестиции</li>
                    </ul>
                        {[<Directions direction={this.state.direc} />, <Rent direction={this.state.direc} />, <Sale direction={this.state.direc} />, <Investment direction={this.state.direc} />][this.state.tabIndex]}
                </div>
            </section>
        )
    }
}

export default DirectionsTabs;