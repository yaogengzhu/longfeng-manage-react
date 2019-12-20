import React from 'react'
import withStyle, { WithStyles } from 'react-jss'

const styles = {
    loginContainer: {
        background: ''
    }
}

interface IProps extends WithStyles<typeof styles> {

}

class Login extends React.Component<IProps, {}> {
   
    public render() {
        const classes = this.props.classes
        return (
            <div className={['column' ,classes.loginContainer,].join(' ')}>测试登录</div>
        )
    }
}

export default withStyle(styles)(Login)