import React from 'react';


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "go" : "gooooo",
        }
    }

    render() {
        return (
            <div className="ty" style={{background: "#535860", color: "#fff"}}>
               contacts
            </div>
        );
    }
}

export default Contacts;
