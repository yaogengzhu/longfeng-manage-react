import React from 'react'
import withStyle, { WithStyles} from 'react-jss'

const styles = {

}

interface IProps extends WithStyles<typeof styles> {

}

class IndexPageComp extends React.Component<IProps, {}> {
    
    public render() {
        return (
            <div>这是首页</div>
        )
    }
}

export const IndexPage = withStyle(styles)(IndexPageComp)