import React from 'react'
import { Switch, Route, HashRouter } from "react-router-dom"
import Main from './view/main/main'
import Login from './view/login/login'
import { dialog } from './utils/dialog'
import Rigster from '../src/view/login/components/register'



const App: React.FC = () => {
	dialog.showDialog(<Rigster></Rigster>)
	return (
		<div className="App" style={{ height: '100%' }}>
			<HashRouter>
				<Switch>
					<Route path='/main' component={Main}></Route>
					<Route path='/login' component={Login}></Route>
				</Switch>
			</HashRouter>
		</div>
	);
}

export default App
