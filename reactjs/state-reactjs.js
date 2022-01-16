
componentWillReceiveProps(nextProps) {
	this.setState({
		status: nextProps.status,
		name: nextProps.name
	})
}

set_state(obj) {
	this.setState(obj)
}

render() {
	return (
		<React.Fragment>
			<button onClick={() => this.set_state({ status: `` })} >
				Close
			</button>
		</React.Fragment>
	)
}