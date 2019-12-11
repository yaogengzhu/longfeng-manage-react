import React from 'react'

import { Layout} from 'antd'
import HeaderComp from './header-comp/header-comp'
import { Route, RouteComponentProps, Redirect, Switch, Router } from 'react-router'
import HomeCenter from '../home-plate/router'

const { Header, Content, Sider } = Layout

export default class Main extends React.Component<RouteComponentProps>{
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public componentDidMount() {
        console.log(this.props.match.path)
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
                                    {/* <Switch>
                                        <Route path={ this.props.match.path + '/my' } component={ HomeCenter}></Route>
                                    </Switch> */}
                                    <div>呃呃呃呃</div>
                            </Content>
                        </Layout>
                        </Layout>
                    </Layout>
            </div>
        )
    }
} 