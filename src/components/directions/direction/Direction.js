import React from 'react';

import './Direction.scss';

import group1 from './img/Group 1.svg';
// import fireDbDen from '../../../store/firebaseDen'



class Direction extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'name': '',
            'phone': '',
            'email': '',
            'image': '',
            'direc': {}
        }
        this.dir = ['name', 'phone', 'title'];
        this.getDirect();
    }
    getDirect = () => {
        fetch('https://exchange-9bcd3.firebaseio.com/directions.json')
            .then(data => {
                return data.json();
            })
            .then(data => {
                console.log(data);
                this.setState({ phone: data[0].phone });
                let result = {};
                for (let i = 0; i < this.dir.length; i++) {
                    result[this.dir[i]] = data[0][this.dir[i]];
                }
                console.log(result);
                this.setState({ direc: result });
            });
    }






    render() {
        return (
            <div className="direction-card">
                <div className="direction-card__title">Аренда жилой недвижимости</div>
                {Object.keys(this.state.direc).map((keyName, i) =>
                    (
                        <div className="direction-card__box">
                            <div className="direction-card__box-inner" key={keyName}>
                                <div className="direction-card__box-text">Руководитель</div>
                                <div className="direction-card__box-name">
                                    {this.state.direc[keyName]}
                                </div>
                                <div className="direction-card__box-phone">
                                    <a href="tel:+7-495-199-19-99">{this.state.direc[i]}</a>
                                </div>
                                <a className="direction-card__box-email" href="mailto:moscow@blitz.estate">
                                    {this.state.direc[keyName]}
                                </a>
                            </div>
                            <div className="direction-card__box-img">
                                <img src={group1} alt="" />
                            </div>
                        </div>
                    )
                )}
            </div>
        )
    }
}

export default Direction;