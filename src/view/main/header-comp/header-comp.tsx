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
                <div className="header-left"></div>
                <div className="header-center">
                    <span>龙风仓库管理系统</span>
                </div>
                <div className="header-right" onClick={() => {this.setState({ isUp: true})}}>
                    <div className="header-avatar"></div>
                    <div className="header-info">
                        <p>朱耀更</p>
                        <p>15871222392</p>
                    </div>
                    <div className="header-arrow">
                        <span className={'arrow-span ' + (this.state.isUp ? '' : 'up')}>
                            <Inconfont name='iconbottomArrow'></Inconfont>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}