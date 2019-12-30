import React from 'react'
import withStyle, {WithStyles} from 'react-jss'
import { Layout, Menu, Icon } from 'antd'
import { RouteComponentProps, withRouter } from 'react-router-dom'
const { Sider } = Layout

const styles = {
    sliderContainer: {
        height: '100vh'
    }
}

interface IProps extends RouteComponentProps, WithStyles<typeof styles> {
}

interface IState {
    collapsed: boolean
}

class Slider extends React.Component<IProps , IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            collapsed: false
        }   
    }

    onCollapse = (collapsed: any) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    public render() {
        const classes = this.props.classes

        return(
            <section className={[classes.sliderContainer].join(' ')}>
                <Layout style={{ minHeight: '100%' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Menu  defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" onClick={() => { this.props.history.push({pathname: '/main/index'})}}>
                            <Icon type="home"/>
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={() => { this.props.history.push({pathname: '/main/articleAdmin'})}}>
                            <Icon type="appstore" />
                            <span>文章管理</span>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={() => { this.props.history.push({pathname: '/main/category'})}}>
                            <Icon type="profile"/>
                            <span>分类管理</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="smile" />
                            <span>广告管理</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    </Layout>
            </section>
        )
    }
}

export default withStyle(styles)(withRouter(Slider))
// export default withRouter(connect()(withStyle(styles)(Slider)))
