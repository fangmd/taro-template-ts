import { request } from '@/utils/request'

export class CommonService {
  static testGet() {
    return request({ method: 'GET', url: `https://raw.githubusercontent.com/fangmd/blogsource/master/user`, data: {} })
  }

  static testGetWithLoading() {
    return request({
      method: 'GET',
      url: `https://raw.githubusercontent.com/fangmd/blogsource/master/user`,
      data: {},
      loading: true,
    })
  }
}
