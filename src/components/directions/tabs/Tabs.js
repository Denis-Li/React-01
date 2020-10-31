import React from 'react';
import './Tabs.scss';

import Directions from '../Directions';
import Rent from '../Rent';


class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0}
        // this.setState({ tabIndex: null })
    }

    static getDerivedStateFromProps(props, state) {
        return {stateDirections: props.directions};
    }
    

    render() {
        return (
            <div className="directions__tabs">
                <a className="directions__tab tab--active" onClick={() => this.setState({tabIndex: 0})}>Все</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 1})}>Аренда</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 2})}>Продажа</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 3})}>Инвестиции</a>

                {[<article>1</article>, <Rent />, <article></article>, <Directions />][this.state.tabIndex]}
            </div>
        )
    }
}

export default Tabs;