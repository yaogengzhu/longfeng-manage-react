
export function historyListen(fn: () => any | void) {
    window.addEventListener('popstate', fn, false)

    return () => {
        window.removeEventListener('popstate', fn)
    }
}

export function isType(s: any, result: string) {
    return (/\[object (\w+)\]/.exec(Object.prototype.toString.call(s)) as any[])[1] === result
}