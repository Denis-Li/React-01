import React from 'react';


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "go" : "gooooo",
        }
    }

    render() {
        return (
            <div className="ty" style={{background: "#535860", color: "#fff"}}>
               about us
            </div>
        );
    }
}

export default About;
