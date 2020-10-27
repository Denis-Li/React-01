import React from 'react';
import './Directions.scss';

// import Direction from './direction/Direction';
// import group1 from './direction/img/Group 1.svg';
import Tabs from './tabs/Tabs';

class Directions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'title' : '',
            'name' : '',
            'phone' : '',
            'email' : '',
            'image' : '',
            'direc' : {}
        }
        this.dir = [0, 1, 2, 3, 4, 5, 6, 7];
        this.getDirect();
    }
    getDirect = () => {
        fetch('https://exchange-9bcd3.firebaseio.com/directions.json')
          .then(data => {
            return data.json();
          })
          .then(data => {
            console.log(data);
            let result = {};
            for (let i = 0; i < this.dir.length; i++){
                result[this.dir[i]] = data[this.dir[i]];
                for (let r = 0; r < 2; r++){
                    this.setState({title : data[r].title});
                    this.setState({name : data[r].name});
                    this.setState({phone : data[r].phone});
                    this.setState({email : data[r].email});
                    this.setState({image : data[r].image});
                }
            }
            console.log(result);
            this.setState({direc : result});
        });
    }
    render() {
        return (
            <section className="directions">
				<div className="container">
					<h2 className="directions__heading">Направления нашего агентства</h2>
					<Tabs /*activeItem={this.props.index} onClickItem={this.props.onSetCategoryIndex} items={categoryNames}*/ />
                    <div className="directions__box">
                        {Object.keys(this.state.direc).map((keyName,i) =>
                        (
                        <div className="direction-card" key={keyName}>
                            <div className="direction-card__title">{this.state.title}</div>
                            <div className="direction-card__box">
                                <div className="direction-card__box-inner">
                                    <div className="direction-card__box-text">Руководитель</div>
                                    <div className="direction-card__box-name">
                                        {this.state.name}
                                    </div>
                                    <div className="direction-card__box-phone">
                                        <a href="tel:+7-495-199-19-99">{this.state.phone}</a>
                                    </div>
                                    <a className="direction-card__box-email" href="mailto:moscow@blitz.estate">
                                        {this.state.email}
                                    </a>
                                </div>
                                <div className="direction-card__box-img">
                                    {/* <img src={group1} alt="" /> */}
                                    <img src={this.state.image} alt="" />
                                </div>
                            </div>
                        </div>
                        )
                        )}
                        {/* <Direction /> */}
                        {/* {direction} */}
                    </div>
				</div>
			</section>
        )
    }
}

export default Directions;