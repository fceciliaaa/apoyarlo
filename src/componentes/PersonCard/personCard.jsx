import { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            age: this.props.age
        }
    }
    aumentarEdad = () => {
        this.setState({ age: this.state.age + 1})
    }

    render = () => {
        return (
            <>
                <h1> {this.props.lastName}, {this.props.firstName} </h1>
                <h3> Edad: {this.state.age} </h3>
                <h3> Color de cabello: {this.props.hairColor} </h3>
                <button onClick={this.aumentarEdad}>Birthday button of {this.props.firstName} </button>
            </>
        );
    }
}

export default PersonCard