import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

import Main from './view/main/main'


const App: React.FC = () => {
  return (
    <div className="App" style={{height: '100%'}}>
		<Router>
			<Route path='/' component={ Main }></Route>
		</Router>
    </div>
  );
}

export default App;
