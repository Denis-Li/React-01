import React from 'react';


class Other extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "go" : "gooooo",
        }
    }

    render() {
        return (
            <div className="ty" style={{background: "#535860", color: "#fff"}}>
               404
            </div>
        );
    }
}

export default Other;
