import React from 'react';
import './Directions.scss';


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
            })
            .then(data => {
                // console.log(data);
                this.setState({ direc: data })  
            })
        }
   
    render() {
        return (
            // <section className = "directions" >
            //     <div className="container">
            //         <h2 className="directions__heading">Направления нашего агентства</h2>
            //         <Tabs directions={this.state.direc} />
                    <div className="directions__box">
                        {Object(this.state.direc).map((keyName,index) =>
                        (
                        <div className="direction-card" key={index}>
                            <div className="direction-card__title" >{keyName.title}</div>
                            <div className="direction-card__box">
                                <div className="direction-card__box-inner">
                                    <div className="direction-card__box-text">Руководитель</div>
                                    <div className="direction-card__box-name">
                                    {keyName.name}
                                    </div>
                                    <div className="direction-card__box-phone">
                                        <a href="tel:+7-495-199-19-99">{keyName.phone}</a>
                                    </div>
                                    <a className="direction-card__box-email" href="mailto:moscow@blitz.estate">
                                        {keyName.email}
                                    </a>
                                </div>
                                <div className="direction-card__box-img">
                                    <img src={keyName.image} alt="" />
                                </div>
                            </div>
                        </div>
                        )
                        )}
                    </div>
            //     </div>
            // </section>
        )
    }
}

export default Directions;