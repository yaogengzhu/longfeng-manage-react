import React from 'react'

import { RouteComponentProps, Switch, Route } from 'react-router'
import Home from './home/home'

function Router(props: RouteComponentProps) {
    return (
        <Switch>
            <Route path={ props.match.path + '/home'} compontent={ Home }></Route>
        </Switch>
    )
}

export default Router