import React from 'react'
import { NavLink } from 'react-router-dom'
import './sub-nav.scss'

interface IProps {
    to: string
    title: string
}

class SubNav extends React.Component <IProps, {}>{
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }
    
    public render() {
        return(
            <div className='subNav-comp'>
                <NavLink activeClassName='active' className='subNav-a' to={ this.props.to }>{ this.props.title }</NavLink>
            </div>
        )
    }
}

export default SubNav