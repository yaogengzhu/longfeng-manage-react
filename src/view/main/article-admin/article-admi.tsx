import React from 'react'
import withStyle, {WithStyles} from 'react-jss'

const styles = {}

interface IProps extends WithStyles<typeof styles> {

}

class ArticleAdminComp extends React.Component<IProps, {}> {

    public render() {
        return(
            <div>文章管理</div>
        )
    }
}

export const ArticleAdmin = withStyle(styles)(ArticleAdminComp)
