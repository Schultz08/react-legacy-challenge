const { Component } = require("react");

class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: ""
        }
    }


    componentDidMount() {
        fetch("https://random.dog/woof.json")
            .then(res => res.json())
            .then(data => this.setState({ img: data.url }))
    }

    render() {
        return (
            <dvi style={{marginTop: "5rem"}}>
                <img src={this.state.img} alt={"The Dog"} />
                <button onClick={()=>{this.componentDidMount()}}>Fetch</button>
            </dvi>
        )
    }
}

export default DogIndex;