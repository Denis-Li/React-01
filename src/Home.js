import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "go" : "gooooo",
        }
    }

    render() {
        return (
            <div className="ty" style={{background: "#535860", color: "#fff"}}>
               its a home page
            </div>
        );
    }
}

export default Home;
