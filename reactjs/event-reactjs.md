# button
set_state(obj) {
	this.setState(obj)
}
<button type="button" onClick={() => this.set_state({ openMenu: `` })}
</button>

<button type="button" onClick={(e) => this.handleDelete(e)}
</button>

# form
constructor(props) {
	this.handleSubmit = this.handleSubmit.bind(this)
}
async handleSubmit(e) {
    e.preventDefault()
    this.setState({status: 'loading'})
    const params = new FormData(e.target)
    let res = await Ajax.post(`/users`, params)
    if(res.status==='success'){
        this.setState({status: 'success'})
        return;
    }
    this.setState(res)
}
<form onSubmit={this.handleSubmit}>
</form>