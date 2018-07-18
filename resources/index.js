import React from 'react'
import {render} from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux'
import App from 'components/app'
import Login from 'container/login/login'
import Register from 'container/register/register'
import { HashRouter, Route, Redirect, Switch, Link } from 'react-router-dom'
import reducers from 'reducer'

const store = createStore(reducers)

render(
	(<Provider store={store}>
		<HashRouter>
			<div>
				<Route exact path='/' component={Login} />
				<Route path='/register' component={Register}/>
			</div>
		</HashRouter>
	</Provider>), 
	document.getElementById('app')
)
