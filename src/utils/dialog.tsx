import { render } from 'react-dom'

class Dialog {
    private globalDialogStack: Array<{
        resolve: () => void
    }> = []

    public showDialog(component: any, options: {
        maskOpacity: number
    } = {maskOpacity: 0.5}) {
        const dC = document.createElement('div')
        dC.style.position = 'fixed'
        dC.style.top = '0'
        dC.style.left = '0'
        dC.style.right = '0'
        dC.style.bottom = '0'
        dC.style.zIndex = '2'
        dC.style.background = `rgba(51, 51, 51, ${options.maskOpacity})`
        document.body.appendChild(dC)
        render(component, dC)

        const dialogPrimose = new Promise(( resolve, reject) => {
            this.globalDialogStack.push({
                resolve
            })
        }).then(() => {
            if(document.body.contains(dC)) {
                document.body.removeChild(dC)
            }
        })
        return dialogPrimose
    }

    public pop() {
        const dialogResolver = this.globalDialogStack.pop()
        dialogResolver && dialogResolver.resolve()
    }
}

export const dialog = new Dialog()