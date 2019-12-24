import React from 'react'
import Header from './components/header/header'
import Slider from './components/slider/slider'
import { Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'

interface IProps {

}
class Main extends React.Component<IProps & RouteComponentProps, {}> {

    public componentDidMount() {
        console.log(this.props)
    }

    public render() {
        return(
            <div>
                <Header></Header>
                <div className='row'>
                    <Slider></Slider>
                    <div className='expaned'>
                        <Switch>
                            <Route path={ this.props.match.path + '/index'}></Route>
                            {/* 重定向 */}
                            <Redirect to={ this.props.match.path + '/index'}></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}


export default Main