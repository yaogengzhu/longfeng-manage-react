import React from 'react'

import { Layout} from 'antd'
import HeaderComp from './header-comp/header-comp'
import { Route, RouteComponentProps, Redirect, Switch, Router } from 'react-router-dom'
import HomeCenter from '../home-center/router'

const { Header, Content} = Layout

export default class Main extends React.Component<RouteComponentProps>{
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render() {
        return(
                <div style={{width: '100%', height: '100%'}}>
                    <Layout>
                            <Layout>
                            <Header>
                                <HeaderComp></HeaderComp>
                            </Header>
                            <Layout>
                                <Content>
                                    <Switch>
                                        <Route path={ this.props.match.path + '/homeCenter' } component={ HomeCenter}></Route>
                                    </Switch>
                                </Content>
                            </Layout>
                            </Layout>
                        </Layout>
                </div>
        )
    }
} 