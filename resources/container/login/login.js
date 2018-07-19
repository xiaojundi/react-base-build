import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

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
		this.props.login({user:key, pwd:value})
	}
	handleChange(key, value){
		this.setState({
			[key]: value
		})
	}
	render(){
		return(
			<div>
				<div className="login">pleases login</div>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: login
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)