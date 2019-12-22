import React from 'react'
import withStyle, { WithStyles } from 'react-jss'
import { Input, Button, Checkbox} from 'antd'
import bg from '@/assets/images/login.jpg'
import { Iconfont } from '../../components/icon-font/icon-font'
import { MessageType, Message } from '../../utils'
import { $fetch } from '../../api'
import { dialog } from '../../utils/dialog'
import Register from './components/register'
const styles = {
    loginContainer: {
        background: `url(${bg}) center center no-repeat`,

        '& .box': {
            marginTop: '20px',
            width: '480px',
            height: '380px',
            padding: '30px 40px',
            background: "rgba(255, 255, 255 ,0.9)"
        },
    }
}

interface IProps extends WithStyles<typeof styles> {

}

class Login extends React.Component<IProps, {}> {
   
    public render() {
        const classes = this.props.classes
        return (
            <div className={['column','align-items-center',classes.loginContainer,].join(' ')}>
                <h1 className='font-size-40 color-fff' style={{ marginTop: '200px'}}>房屋租赁管理系统</h1>
                <div className='box border-radius-10'>
                    <h2 className='font-size-16 color-primary-light'>登录账号</h2>
                    <Input size='large' placeholder='请输入账号' className='margin-top-10'></Input>
                    <Input size='large' type='password' placeholder='请输入密码' className='margin-top-10'></Input>
                    <div className='height-60 row align-items-center font-size-14 space-between'>
                        <p>
                            <Checkbox className='margin-left-5'></Checkbox>
                            <span className='margin-left-5'>下次自动登录</span>
                        </p>
                        <p>
                            <span className='padding-right-10 pointer'>忘记密码</span>|
                            <span className='padding-left-10 pointer' onClick={() => { dialog.showDialog(<Register></Register>)}}>注册账号</span>
                        </p>
                    </div>
                    <Button size='large' type="primary" block style={{ backgroundColor: '#1183fb'}} onClick={() => { this.login()}}>登录</Button>
                    <div className='height-50 row justify-content-center align-items-center margin-top-20 '>
                        <div className='width-140 height-40 pointer row align-items-center  justify-content-center' onClick={() => {Message(MessageType.error, '暂不支持QQ登录', 1)}}>
                            <Iconfont name='iconQQ' size='30'></Iconfont>
                            <span className='padding-left-10'>QQ登录</span>
                        </div>
                        <div className='width-140 height-40 pointer row align-items-center  justify-content-center margin-left-40' onClick={() => {Message(MessageType.error, '暂不支持微信登录', 1)}}>
                            <Iconfont name='iconweixin' size='35'></Iconfont>
                            <span className='padding-left-10'>微信登录</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private login() {
        $fetch.post({
            url: '/test'
        }).then(res => {
            console.log(res)
        })
        Message(MessageType.success, '登录成功', 1)
    }
}

export default withStyle(styles)(Login)