/**
 * ui 相关工具函数
 */

import Taro from '@tarojs/taro'

/**显示 Toast */
export const showToast = msg => {
  Taro.showToast({
    title: msg,
    icon: 'none',
    duration: 2000,
  })
}

/**显示全局 loading */
export const showLoading = () => {
  Taro.showLoading()
}

/**隐藏全局 loading */
export const hideLoading = () => {
  Taro.hideLoading()
}
