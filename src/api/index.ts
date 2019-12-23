import Axios from 'axios'
import mainConfig from './server_config/main'
// import { shopInfoStore } from '@/store/shop_info'
// import store from '@/store'

// console.log(modules)
class Fetch {
    private static getData(config: any) {
        // console.log(config)
        const instance = Axios.create(config)

        // 添加单次请求的拦截器
        instance.interceptors.request.use(...config.reqInterceptor)
        instance.interceptors.response.use(...config.repInterceptor)

        return instance.request(config)
    }

    public post<T>(data: {
        url: string,
        params?: any
    }): Promise<T> {
        const serverConfig = {
            url: data.url,
            method: 'post',
            // headers: {
            //     "Authentication": shopInfoStore.token,
            //     "ShopAuthentication": localStorage.getItem('shopId'),
            //     "CashierSn": 123
            // },
            data: data.params // qs.stringify(data.params)
        }

        return Fetch.getData(Object.assign({ }, mainConfig, serverConfig)) as Promise<any>
    }
}

const $fetch = new Fetch()

export {
    $fetch
}
