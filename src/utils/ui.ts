/**
 * ui 相关工具函数
 */

import Taro from '@tarojs/taro'

export const showToast = msg => {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: 2000,
  })
}

export const showLoading = () => {
  Taro.showLoading()
}

export const hideLoading = () => {
  Taro.hideLoading()
}
