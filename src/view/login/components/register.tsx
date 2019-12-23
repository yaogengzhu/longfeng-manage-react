import React from 'react'
import withStyle, { WithStyles } from 'react-jss'
import DialogHeader from '../../../components/dialog-header/dialog-header'
import { dialog } from '../../../utils/dialog'
import { InputNumber, Input, Button } from 'antd'

const styles = {
    registerContainer: {
        '& .registerBox': {
            width: '600px',
            background: '#fff',
            'border-top-left-radius': '10px',
            overflow: 'hidden'
        },

        '& .inputBox': {
            width: '100%',
            height: '500px'
        }
    }
}


interface IProps extends WithStyles<typeof styles> {
}

class Register extends React.Component<IProps, {}> {
    

    public render() {
        const classes = this.props.classes
        return(
            <section className={['row', classes.registerContainer].join(' ')}>
                <div className='expaned' onClick={() => { dialog.pop()}}></div>
                <div className='registerBox column'>
                    <DialogHeader title=''></DialogHeader>
                    <div className='column padding-left-20'>
                        <h2 className='font-size-30 color-primary-light'>欢迎注册</h2>
                        <div className='row justify-content-center padding-left-30 padding-right-30'>
                            <div className="inputBox margin-top-30">
                                <div className='row overflow-hidden align-items-center height-80'>
                                    <div className='width-100'>用户昵称:<i>*</i></div>
                                    <Input className='expaned' placeholder='请输入用户昵称' size='large'></Input>
                                </div>
                                <div className='row overflow-hidden align-items-center height-80'>
                                    <div className='width-100'>手机号:</div>
                                    <Input className='expaned' placeholder='请输入手机号' size='large'></Input>
                                </div>
                                <div className='row overflow-hidden align-items-center height-80'>
                                    <div className='width-100'>密码:</div>
                                    <Input className='expaned' type='password' placeholder='请输入密码' size='large'></Input>
                                </div>

                                <div className='row overflow-hidden align-items-center height-80'>
                                    <div className='width-100'></div>
                                    <Button className='expaned' type='primary' block size='large' style={{ height: '50px'}}>立即注册</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withStyle(styles)(Register)