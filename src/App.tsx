import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    RouteComponentProps
  } from "react-router-dom"

import Main from './view/main/main'
import Login from './view/login/login';


const App: React.FC = () => {
  return (
    <div className="App" style={{height: '100%'}}>
		<Router>
			<Route exact path='/main' component={ Main }></Route>
      <Route path='/login' exat component={ Login}></Route>
      <Redirect to='/main' ></Redirect>
		</Router>
    </div>
  );
}

export default App;
