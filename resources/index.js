import React from 'react'
import {render} from 'react-dom'
import App from 'components/app'
import Login from 'container/login/login'
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'


render(
	<HashRouter>
		<div>
			<Route exact path='/' component={Login} />
			<Route path='/register' component={Login}/>
		</div>
	</HashRouter>, 
	document.getElementById('app')
)
