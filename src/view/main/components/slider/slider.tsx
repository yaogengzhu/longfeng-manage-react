import React from 'react'
import withStyle, {WithStyles} from 'react-jss'
import { Layout, Menu, Icon } from 'antd'
// import { RouteComponentProps, withRouter } from 'react-router'
// import { connect } from 'react-redux'
const { Sider } = Layout
const { SubMenu } = Menu

const styles = {
    sliderContainer: {
        height: '100vh'
    }
}

interface IProps extends WithStyles<typeof styles> {
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
                        <Menu.Item key="1" onClick={() => { console.log(this.props)}}>
                            <Icon type="pie-chart" />
                            <span>房源信息</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>合同信息</span>
                        </Menu.Item>
                            <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>申请列表</span>
                                </span>
                            }
                          >
                                <Menu.Item key="3">看房申请</Menu.Item>
                                <Menu.Item key="4">退租申请</Menu.Item>
                                {/* <Menu.Item key="5"></Menu.Item> */}
                            </SubMenu>
                            <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="deployment-unit" />
                                    <span>故障保修</span>
                                </span>
                            }
                            >
                                <Menu.Item key="6">待处理故障</Menu.Item>
                                <Menu.Item key="8">已处理故障</Menu.Item>
                            </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="pay-circle" />
                            <span>租金信息</span>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Icon type="schedule" />
                            <span>我的日程</span>
                        </Menu.Item>
                        <Menu.Item key="11">
                            <Icon type="setting" />
                            <span>设置</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    </Layout>
            </section>
        )
    }
}

export default withStyle(styles)(Slider)
// export default withRouter(connect()(withStyle(styles)(Slider)))
