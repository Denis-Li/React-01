import React from 'react';
import './Directions.scss';

// import Direction from './direction/Direction';
// import group1 from './direction/img/Group 1.svg';
import Tabs from './tabs/Tabs';

class Directions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direc: []
            
        }
    }
    componentDidMount() {
            fetch('https://exchange-9bcd3.firebaseio.com/directions.json')
                .then(data => {
                    return data.json();
                }).then(RespData => {
                    this.setState({ direc: RespData })  
                })
               
        }
        // getDirect = () => {
        // console.log( 'Data', data);
        // let result = [];
        // for (let i = 0; i < this.dir.length; i++){
        //     result[this.dir[i]] = data[this.dir[i]];
        //     for (let r = 0; r < 2; r++){
        //         this.setState({title : data[r].title});
        //         this.setState({name : data[r].name});
        //         this.setState({phone : data[r].phone});
        //         this.setState({email : data[r].email});
        //         this.setState({image : data[r].image});
        //     }
        // }
        //         // console.log( 'REsult',result);
        //     });

        //     this.setState({direc : "dddddd"});
        
   
    render() {
        let direction = (
            this.state.direc.map((card, index) => (
                <div className="direction-card" key={index}>
                    <div className="direction-card__title" >{card.title}</div>
                    <div className="direction-card__box">
                        <div className="direction-card__box-inner">
                            <div className="direction-card__box-text">Руководитель</div>
                            <div className="direction-card__box-name">
                            {card.name}
                            </div>
                            <div className="direction-card__box-phone">
                                <a href="tel:+7-495-199-19-99">{this.state.phone}</a>
                            </div>
                            <a className="direction-card__box-email" href="mailto:moscow@blitz.estate">
                                {card.email}
                            </a>
                        </div>
                        <div className="direction-card__box-img">
                            {/* <img src={group1} alt="" /> */}
                            <img src={card.image} alt="" />
                        </div>
                    </div>
                </div>
            
            )
        )
        )




    return(
            <section className = "directions" >
            <div className="container">
                <h2 className="directions__heading">Направления нашего агентства</h2>
                <Tabs /*activeItem={this.props.index} onClickItem={this.props.onSetCategoryIndex} items={categoryNames}*/ />
                <div className="directions__box">
                    {direction}
                    {/* <Direction /> */}
                    {/* {direction} */}
                </div>
            </div>
            </section>
        )
    }
}

export default Directions;