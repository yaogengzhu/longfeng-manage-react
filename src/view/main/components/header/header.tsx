import React from 'react'
import withStyle, { WithStyles } from 'react-jss'

const styles = {
    headerContainer: {
        height: '60px',
        'box-shadow': '0 2px 20px rgba(0, 0, 0, 0.2)',

        '& .logo': {
            width: '200px'
        },

        '& .person': {
            width: '200px'
        }
    },
}

interface IProps extends WithStyles<typeof styles> {

}

class Header extends React.Component<IProps, {}> {


    public render() {
        const classes = this.props.classes

        return(
            <div className={['row', classes.headerContainer].join(' ')}>
                <div className="logo"></div>
                <div className='expaned row align-items-center'>
                    <h1 className='font-size-30 font-weight-300'>龙风博客管理系统</h1>
                </div>
                <div className='person'></div>
            </div>
        )
    }
}

export default withStyle(styles)(Header)