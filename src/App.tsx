import React from 'react'
import { Switch, Route, HashRouter, Redirect } from "react-router-dom"
import Main from './view/main/main'
import Login from './view/login/login'


const App: React.FC = () => {

	return (
		<div className="App" style={{ height: '100%' }}>
			<HashRouter>
				<Switch>
					<Route path='/main' component={Main}></Route>
					<Route path='/login' component={Login}></Route>
					<Redirect to='/main'></Redirect>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App
