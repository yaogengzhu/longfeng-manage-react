import React from 'react'
import { Input, Button } from 'antd'
import './login.scss'

export default class Login extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    public render() {
        return(
            <div className='login'>
                <h1>龙风仓库管理系统</h1>
                <div className='login-box'>
                    <Input size='large' placeholder='请输入账号'></Input>
                    <Input size='large' placeholder='请输入密码'></Input>
                    <p>
                        <span>注册</span>
                        <span>忘记密码</span>
                    </p>
                    <Button type='primary' size='large'>登录</Button>
                </div>
            </div>
        )
    }
}