import Taro from '@tarojs/taro'
import { useEffect } from 'react'

/**
 * App 更新
 */
export const useAppUpdate = () => {
  useEffect(() => {
    if (Taro.getEnv() !== Taro.ENV_TYPE.WEAPP) {
      return
    }

    const updateManager = Taro.getUpdateManager()
    updateManager.onCheckForUpdate(res => {
      // 请求完新版本信息的回调
      console.log('请求完新版本信息的回调', res.hasUpdate)
    })

    updateManager.onUpdateReady(() => {
      Taro.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        },
      })
    })
    updateManager.onUpdateFailed(() => {
      // 新的版本下载失败
    })
  }, [])
}
