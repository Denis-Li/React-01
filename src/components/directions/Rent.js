import React from 'react';

class Rent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direc: []
        }
        this.arrIndex = [0, 1];
    }
    componentDidMount() {
        fetch('https://exchange-9bcd3.firebaseio.com/directions.json')
            .then(data => {
                return data.json();
            })
            .then(data => {
                // console.log(data);
                this.setState({ direc: data });
                let result = [];
                for (let i = 0; i < this.arrIndex.length; i++){
                    result[this.arrIndex[i]] = data[this.arrIndex[i]];
                }
                console.log(result);
                this.setState({direc : result});
            });
    }
   
    render() {
        return (
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
        )
    }
}

export default Rent;