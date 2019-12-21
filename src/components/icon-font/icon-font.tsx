import React from 'react'
import { Style } from 'jss'

function Iconfont(props: {
  name: string,
  size?: string,
  className?: string,
  style?: Style,
  onClick?: (e?: any) => void
}) {
  let className = 'icon '
  if (props.className != null) {
    className += props.className
  }

  return <svg onClick={ (e: any) => props.onClick && props.onClick(e) } className={ className } aria-hidden="true" style={ { ...props.style, fontSize: props.size || 12}}>
    <use xlinkHref={ '#' + props.name}></use>
  </svg>
}

export {
  Iconfont
}
