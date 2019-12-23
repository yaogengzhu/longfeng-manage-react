import React from 'react' 
import './header-comp.scss'
import Inconfont from '../../../components/inconfont/inconfont'
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
                        <NavLink className='span' to='/main/my'>我的地盘</NavLink>
                        <NavLink className='span' to='/product'>产品</NavLink>
                        <NavLink className='span' to='/project'>项目</NavLink>
                        <NavLink className='span' to='/test'>测试</NavLink>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-center">
                        <NavLink  className='span' to=''>代码</NavLink>
                        <NavLink  className='span' to=''>运维</NavLink>
                        <NavLink  className='span' to=''>办公</NavLink>
                        <NavLink  className='span' to=''>反馈</NavLink>
                        <NavLink  className='span' to=''>文档</NavLink>
                        <NavLink  className='span' to=''>统计</NavLink>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-right">
                        <NavLink  className='span' to=''>组织</NavLink>
                        <NavLink  className='span' to=''>后台</NavLink>
                    </div>
                </div>
                <div className="header-right"></div>
            </div>
        )
    }
}