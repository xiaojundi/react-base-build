import axios from 'axios'
// import {getRedirectPath} from '../util'
const AUTH_SUCESS = 'AUTH_SUCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'
const initState={
	redirectTo:'',
	msg:'',
	user:'',
	type:''
}
// reducer
export function user(state=initState, action){
	console.log(action)
	switch(action.type){
		// case AUTH_SUCESS:
		// 	return {...state, msg:'',redirectTo:'/'}
		// case LOAD_DATA:
		// 	return {...state, ...action.payload}
		// case ERROR_MSG:
		// 	return {...state, isAuth:false, msg:action.msg}
		// case LOGOUT:
		// 	return {...initState, redirectTo:'/login'}
		default:
			return {key: 2000}
	}
} 

export function login(){
	// if (!user||!pwd) {
	// 	return errorMsg('用户密码必须输入')
	// }
	return function(){
		console.log("asdfasdf")
	}()

	// dispatch=>{
	// 	axios.post('/user/login',{user,pwd})
	// 		.then(res=>{
	// 			if (res.status==200&&res.data.code===0) {
	// 				// dispatch(registerSuccess({user,pwd,type}))
	// 				dispatch(authSuccess(res.data.data))
	// 			}else{
	// 				dispatch(errorMsg(res.data.msg))
	// 			}
	// 		})		
	// }
}