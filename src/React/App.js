import react from 'react';

class AnotherGame extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red",
        }
    }
    changeColor = () => {
        this.setState({
            color: "blue",
        });
    }
    render() {
        return (
            <div>
                <h4>This is another class from another File</h4>
                <EmbededClass />
                <h5>This is {this.state.color} color</h5>
                <button onClick={this.changeColor}></button>
            </div>
        );
    }
}



class EmbededClass extends react.Component {
    render() {
        return (
            <h4>This is a embeded class in AnotherGame class</h4>
        );
    }
}
export default AnotherGame;