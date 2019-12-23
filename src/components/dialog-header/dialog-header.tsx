import React from 'react'
import withStyle, { WithStyles} from 'react-jss'
import { Iconfont } from '../icon-font/icon-font'
import { dialog } from '../../utils/dialog'

const styles = {
    dialogHeader: {
        background: '',
        width: '100%',
        overflow: 'hidden',
        padding: '0 20px'
    }
}

interface IProps extends WithStyles<typeof styles> {
    title: string
    height?: string
}

class DialogHeader extends React.Component<IProps, {}> {
    
    public render() {
        const classes = this.props.classes
        
        return(
            <div className={['row', 'align-items-center', 'space-between', classes.dialogHeader].join(' ')} style={{ height: this.props.height ? this.props.height + 'px' : '50px'}}>
                <div className='font-size-20 color-primary-light'>{ this.props.title }</div>
                <span className='pointer pointerActive' onClick={() => { dialog.pop()}} >
                    <Iconfont name='icongonggongguanbi' size='20'></Iconfont>
                </span>
            </div>
        )
    }
}

export default withStyle(styles)(DialogHeader)