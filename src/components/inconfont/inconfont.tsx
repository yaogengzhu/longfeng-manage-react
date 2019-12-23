import React from 'react'


interface IProps {
    name?: string,
    fontSize?: string
}
export default class Inconfont extends React.Component<IProps, {}> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }

    public render() {
        return(
            <div>
                <svg aria-hidden="true" className="icon"  style={{ fontSize: this.props.fontSize || 14 + 'px' }}>
                    <use xlinkHref={ '#' + this.props.name }></use>
                </svg>
            </div>
        )
    }
}
