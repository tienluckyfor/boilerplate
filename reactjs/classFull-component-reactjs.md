import React, { Component } from "react"
import { Link } from "react-router-dom"

class Name extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: ``,
            errors: {},
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    set_state(obj) {
        this.setState(obj)
    }

    async handleSubmit(e) {
        e.preventDefault()
        this.setState({ status: 'loading' })
        const data = new FormData(e.target)
    }

    render() {
        let { errors, status } = this.state;
        errors = Object.values(errors);
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                </form>
            </React.Fragment>
        )
    }
}
export default Name