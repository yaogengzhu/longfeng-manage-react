import React from 'react'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router'
import HomePage from './home-page/home-page'
import Schedule from './schedule/schedule'


function Router(props: RouteComponentProps) {
    console.log(props.match.path, '23')
    return (
        <div>
            <Switch>
                <Route path={props.match.path + '/homePage'} component={ HomePage }></Route>
                <Route path={props.match.path + '/schedule'} component={ Schedule }></Route>
                <Redirect to={ props.match.path + '/homePage' }></Redirect>
            </Switch>
        </div>
    )
}


export default Router