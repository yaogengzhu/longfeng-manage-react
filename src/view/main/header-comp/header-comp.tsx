import React from 'react' 
import './header-comp.scss'
import { NavLink } from 'react-router-dom'


interface IState {
    isUp: boolean
}

export default class HeaderComp extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isUp: false
        }
    }

    public render() {
        return(
            <div className='header-comp'>
                <div className="header-left">
                    <h2>龙风测试旗舰版</h2>
                    <span>旗舰版</span>
                    <span>研发</span>
                </div>
                <div className="header-center">
                    <div className="center-left">
                        <NavLink activeClassName='selected' className='span' to='/main/homeCenter/home'>我的地盘</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/productCenter'>产品</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/projectCenter'>项目</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/testCenter'>测试</NavLink>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-center">
                        <NavLink activeClassName='selected' className='span' to='/main/codeCenter'>代码</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/operationCenter'>运维</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/officeCenter'>办公</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/ticklingCenter'>反馈</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/wordCenter'>文档</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/statisticsCenter'>统计</NavLink>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-right">
                        <NavLink activeClassName='selected' className='span' to='/main/organizationCenter'>组织</NavLink>
                        <NavLink activeClassName='selected' className='span' to='/main/backstageCenter'>后台</NavLink>
                    </div>
                </div>
                <div className="header-right"></div>
            </div>
        )
    }
}