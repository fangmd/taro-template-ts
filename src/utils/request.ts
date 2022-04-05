import Taro from '@tarojs/taro'
import { SUCCESS } from '@/constants'
import { hideLoading, showLoading } from './ui'

export const getHeader = () => {
  const ret: any = {}

  return ret
}

interface RequestType {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
  url: string
  data?: any
  loading?: boolean | undefined
}

export const request = async (params: RequestType) => {
  if (params.loading) {
    showLoading()
  }

  const res = await Taro.request({
    method: params.method,
    url: params.url,
    header: getHeader(),
    data: params.data,
  })

  if (params.loading) {
    hideLoading()
  }

  return res
}
