import React from 'react';
import './Tabs.scss';

import Directions from '../Directions';


class Tabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0}
        // this.setState({ tabIndex: null })
    }

    static getDerivedStateFromProps(props, state) {
        return {stateDirections: props.directions};
    }
    // componentDidUpdate(prevState) {
    //     if (this.state.index !== prevState.index) {
    //          this.props.filter('value', (snapshot) => {
    //             if (this.props.index === null) {
    //                 this.props.onSetApartmentssucces(snapshot.val())
    //             } 
    //             else {this.props.filter(apart => apart.category === this.state.tabIndex)
    //                 this.props.onSetApartmentssucces(arr)
    //             }
    //         })
    //     }
    // }

    render() {
        return (
            <div className="directions__tabs">
                <a className="directions__tab tab--active" onClick={() => this.setState({tabIndex: 0})}>Все</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 1})}>Аренда</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 2})}>Продажа</a>
                <a className="directions__tab" onClick={() => this.setState({tabIndex: 3})}>Инвестиции</a>

                <section className='tabs-content'>
                    {[<article>1</article>, <article>2</article>, <article>3</article>, <Directions />][this.state.tabIndex]}
                </section>
            </div>
        )
    }
}

export default Tabs;