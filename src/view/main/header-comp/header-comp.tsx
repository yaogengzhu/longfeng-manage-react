import React from 'react' 
import './header-comp.scss'
import Inconfont from '../../../components/inconfont/inconfont'


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
                        <span>我的地盘</span>
                        <span>产品</span>
                        <span>项目</span>
                        <span>测试</span>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-center">
                        <span>代码</span>
                        <span>运维</span>
                        <span>办公</span>
                        <span>反馈</span>
                        <span>文档</span>
                        <span>统计</span>
                    </div>
                    <div className="center-line"></div>
                    <div className="center-right">
                        <span>组织</span>
                        <span>后台</span>
                    </div>
                </div>
                <div className="header-right"></div>
            </div>
        )
    }
}