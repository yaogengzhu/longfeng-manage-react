import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	RouteComponentProps,
	HashRouter
} from "react-router-dom"

import Main from './view/main/main'
import Login from './view/login/login';


const App: React.FC = () => {
	return (
		<div className="App" style={{ height: '100%' }}>
			<HashRouter>
				<Switch>
					<Route path='/main' component={Main}></Route>
					<Route path='/login' exat component={Login}></Route>
					<Route exact path="/">
						<Redirect to='/main'></Redirect>
						{/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
					</Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App;
