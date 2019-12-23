import { message } from "antd"
import React from "react"

export function historyListen(fn: () => any | void) {
    window.addEventListener('popstate', fn, false)

    return () => {
        window.removeEventListener('popstate', fn)
    }
}

export function isType(s: any, result: string) {
    return (/\[object (\w+)\]/.exec(Object.prototype.toString.call(s)) as any[])[1] === result
}

enum MessageType {
    success,
    error,
    info,
    warning,
    warn,
    loading,
}
export {MessageType}
export const  Message = ( type: MessageType,msg: string,  duration?: number ) => {
    switch(type) {
        case MessageType.success:
            message.success(msg, duration)
            break
        case MessageType.error:
            message.error(msg, duration)
            break
        case MessageType.info:
            message.info(msg, duration)
            break
        case MessageType.warning:
            message.warning(msg, duration)
            break
        case MessageType.warn:
            message.warn(msg, duration)
            break
        case MessageType.loading:
            message.loading(msg, duration)
            break
    }
}

export const WithInputLimit = function(WrappedComponent: any, reg: RegExp) {
    const props = WrappedComponent.props

    return React.createElement('input', {
        ...props,
        onChange: function(e: any) {
            let value: string = e.currentTarget.value
            do {
                if (!reg.test(value)) {
                    if (value.length > 0) {
                        value = value.substr(0, value.length - 1)
                        e.currentTarget.value = value
                        continue
                    } else {
                        break
                    }
                }
            } while (!reg.test(value))
            props.onChange(e)
        }
    })
}