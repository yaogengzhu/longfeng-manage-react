import React from 'react'
import Header from './components/header/header'
import Slider from './components/slider/slider'
class Main extends React.Component {
    

    public render() {
        return(
            <div>
                <Header></Header>
                <div className='row'>
                    <Slider></Slider>
                    <div className='expaned'></div>
                </div>
            </div>
        )
    }
}


export default Main