import React from 'react'

import { RouteComponentProps, Switch, Route, Redirect } from 'react-router'
import Home from './home/home'

function Router(props: RouteComponentProps) {
    return (
        <Switch>
            <Route path={ props.match.path + '/home'} component={ Home }></Route>
            {/* <Redirect to={ props.match.path + "/home" } /> */}
        </Switch>
    )
}

export default Router