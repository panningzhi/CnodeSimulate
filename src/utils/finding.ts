import {request} from '../components/server/request'

export function getBannerData() {
    return request({
        url: "/banner",
        params: {
            type: 0
        }
    })
}
