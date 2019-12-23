import React from 'react'
import { render } from 'react-dom'
import { Alert } from 'antd'
import { isType, historyListen } from './index'

enum MessageType {
    success,
    error,
    info,
    warning
}

export { MessageType }

export const openMessage = (messageType: MessageType, message: string , options?: { atOnce: boolean,  callback? : () => void | any, duration ? : number, Zindex? : number }) => {
    const div = document.createElement('div')
    const unlisten = historyListen(removeDiv)
    let type: 'success' | 'error' | 'info' | 'warning' | undefined

    function appendDiv() {
        render(<Alert 
                type={ type }
                // banner={true}
                
                showIcon={ true }
                message={ message }
            ></Alert>, div)

            document.body.append(div)
            if (options && options.atOnce) {
                options.callback && options.callback()
            }
    }

    function removeDiv(e?: any) {
        if (document.body.contains(div)) {
            document.body.removeChild(div)
        }
        if (!isType(e, 'PopStateEvent') && options && !options.atOnce) {
            options.callback && options.callback()
        }
        unlisten()
    }
    switch (messageType) {
        case MessageType.success:
            type = 'success'
            break
        case MessageType.error:
            type = 'error'
            break
        case MessageType.info:
            type = 'info'
            break
        case MessageType.warning:
            type = 'warning'
            break
        default:
            type = 'info'
            break
    }
    appendDiv()
}