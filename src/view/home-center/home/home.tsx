import React from 'react'
import './home.scss'
import SubNav from '../../../components/sub-nav/sub-nav'

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
                        <SubNav title='日程' to='/main/homeCenter/home/Schedule'></SubNav>
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
        return (
            <div className='home'>
                {this.renderNav()}
            </div>
        )
    }
}

export default Home