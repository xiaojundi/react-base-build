import React from 'react'

class Login extends React.Component {
	constructor(props){
		super(props)
		this.state={
			userID:'',
			pwd:''
		}
		this.handleLogin = this.handleLogin.bind(this)
	}
	register(event){
		console.log("we regist")
		this.setState({user: event.target.value})
	}
	handleLogin(key, value){
		console.log(this.state)
	}
	handleChange(key, value){
		this.setState({
			[key]: value
		})
	}
	render(){
		return(
			<div>
				<div className="login">login</div>
				<div>
					<label>userID</label>
					<input type="text" onChange={v=>this.handleChange("userID",v.target.value)}/>
				</div>
				<div>
					<label>password</label>
					<input type="text" onChange={v=>this.handleChange("pwd",v.target.value)}/>
				</div>
				<button type="button" onClick={this.handleLogin}>login</button>
				<button type="button">register</button>
			</div>
		)
	}
}

export default Login