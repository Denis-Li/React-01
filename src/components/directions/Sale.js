import React from 'react';

class Sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direc: []
        }
    }
    static getDerivedStateFromProps(props, state) {
        return {direc: props.direction};
    }
    render() {
        return (
            <div className="directions__box">
                {Object(this.state.direc).filter(dir => dir.category === 1).map((keyName,index) =>
                (
                <div className="direction-card" key={index} style={{background: "#a1a1a1", color: "#fff"}}>
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

export default Sale;