import React from 'react'
import './home.scss'
import SubNav from '../../../components/sub-nav/sub-nav'
import { Switch, Route, Redirect } from 'react-router'
import HomePageRouter from './router'

class Home extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public renderNav() {
        return (
            <div className='nav-ul'>
                <ul>
                    <li>
                        <SubNav title='首页' to='/main/homeCenter/home/homePage'></SubNav>
                    </li>
                    <li>
                        <SubNav title='日程' to='/main/homeCenter/home/schedule'></SubNav>
                    </li>
                    <li className='line'></li>
                    <li>
                        <SubNav title='任务' to='/main/homeCenter/home/task'></SubNav>
                    </li>
                    <li>
                        <SubNav title='bug' to='/main/homeCenter/home/bug'></SubNav>
                    </li>
                    <li>
                        <SubNav title='测试' to='/main/homeCenter/home/test'></SubNav>
                    </li>
                    <li>
                        <SubNav title='需求' to='/main/homeCenter/home/demand'></SubNav>
                    </li>
                    <li className='line'></li>
                    <li>
                        <SubNav title='项目' to='/main/homeCenter/home/project'></SubNav>
                    </li>
                    <li>
                        <SubNav title='动态' to='/main/homeCenter/home/dynamic'></SubNav>
                    </li>
                    <li className='line'></li>
                    <li>
                        <SubNav title='档案' to='/main/homeCenter/home/record'></SubNav>
                    </li>
                    <li>
                        <SubNav title='密码' to='/main/homeCenter/home/passport'></SubNav>
                    </li>
                    <li>
                        <SubNav title='联系人' to='/main/homeCenter/home/concat'></SubNav>
                    </li>
                    <li>
                        <SubNav title='审批' to='/main/homeCenter/home/examine'></SubNav>
                    </li>
                </ul>
            </div>
        )
    }

    public render() {
        const props = this.props as any
        console.log(props.match.path)
        return (
            <div className='home'>
                {this.renderNav()}
                <div className='home-main'>
                    <Switch>
                        <Route to={ props.match.path + '/home'} component={ HomePageRouter }></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Home