import React from 'react'

import { Layout, Button} from 'antd'
import HeaderComp from './header/header-comp'

const { Header, Content, Sider } = Layout

export default class Main extends React.Component{
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
                        <Sider>Sider</Sider>
                        <Content>
                           
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
           </div>
        )
    }
} 