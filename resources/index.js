import React from 'react'
import {render} from 'react-dom'
import App from 'components/app'
import Login from 'container/login/login'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'



render(
	<BrowserRouter>
		<div>
			<Switch>
				<Route path='/login' component={Login}></Route>
				<Route path='/register'></Route>
			</Switch>
		</div>
	</BrowserRouter>, 
	document.getElementById('app')
)
