import React, { Component } from "react";

class AddInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {}
        };
    }

    getMax(obj, key) {
        let arr = Object.values(obj);
        let max = arr.length
            ? Math.max.apply(
                Math,
                arr.map(function (o) {
                    return o[key];
                })
            )
            : 0;
        return max;
    }

    getMin(obj, key) {
        let arr = Object.values(obj);
        let min = arr.length
            ? Math.min.apply(
                Math,
                arr.map(function (o) {
                    return o[key];
                })
            )
            : 0;
        return min;
    }

    handleAdd(e) {
        e.preventDefault();
        let { inputs } = this.state;

        let id = this.getMax(inputs, "id") + 1;
        let pos = this.getMin(inputs, "pos") - 1;
        let input = {
            id: id,
            pos: pos,
            value: `input ${id}`
        };
        inputs[id] = input;
        this.setState({
            inputs: inputs
        });
    }

    handlePosition(e, id, pos) {
        e.preventDefault();
        let { inputs } = this.state;
        inputs[id]["pos"] += pos;
        this.setState({
            inputs: inputs
        });
    }

    handleDelete(e, id) {
        e.preventDefault();
        let { inputs } = this.state;
        delete inputs[id];
        this.setState({
            inputs: inputs
        });
    }

    render() {
        let { inputs } = this.state;
        inputs = Object.values(inputs);
        inputs.sort((a, b) => Number(a.pos) - Number(b.pos));
        return (
            <React.Fragment>
                <button onClick={(e) => this.handleAdd(e)}>add</button>
                {inputs.map((input, key) => (
                    <section key={key}>
                        <br />
                        <input value={input.value} />
                        <button onClick={(e) => this.handlePosition(e, input.id, -1)}>
                            up
                        </button>
                        <button onClick={(e) => this.handlePosition(e, input.id, +1)}>
                            down
                        </button>
                        <button onClick={(e) => this.handleDelete(e, input.id)}>
                            &times;
                        </button>
                    </section>
                ))}
            </React.Fragment>
        );
    }
}

export default function App() {
    return (
        <div className="App">
            <AddInput />
        </div>
    );
}
