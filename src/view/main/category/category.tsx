import React from 'react'
import withStyle, { WithStyles} from 'react-jss'

const styles = {}
interface IProps extends WithStyles<typeof styles> {}

class CategoryComp  extends React.Component<IProps, {}> {
    public render() {
        return(
            <div>分类</div>
        )
    }
}

export const Category = withStyle(styles)(CategoryComp)