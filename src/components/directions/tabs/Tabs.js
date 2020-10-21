import React from 'react';
import './Tabs.scss';

class Tabs extends React.Component{
    render() {
        return (
            <div className="directions__tabs">
                <a className="directions__tab tab--active" href="#tab-1">Аренда</a>
                <a className="directions__tab" href="#tab-2">Продажа</a>
                <a className="directions__tab" href="#tab-3">Инвестиции</a>
            </div>
        )
    }
}

export default Tabs;