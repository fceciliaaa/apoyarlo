import { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <>
                <h1> {this.props.lastName}, {this.props.firstName} </h1>
                <h3>Edad: {this.props.age} </h3>
                <h3>Color de cabello: {this.props.hairColor} </h3>
            </>
        );
    }
}

export default PersonCard;