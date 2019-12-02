import React from 'react'

import { Layout, Button} from 'antd'

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
                    <Header>Header</Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>
                            <Button type='primary'>测试</Button>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
           </div>
        )
    }
} 