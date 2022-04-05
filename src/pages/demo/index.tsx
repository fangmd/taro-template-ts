import React, { useCallback } from 'react'
import { View, Image } from '@tarojs/components'
import { hideLoading, showLoading, showToast } from '@/utils/ui'
import LoginPng from '@/assets/img/common/login2.png'
import { Button } from '@antmjs/vantui'

import './index.less'
import Taro from '@tarojs/taro'
import { CommonService } from '@/services/CommonService'

/**
 * Demo
 */
const DemoPage: React.FC = () => {
  return (
    <View className='DemoPage__root'>
      <Button
        onClick={() => {
          showToast('123')
        }}
      >
        Toast
      </Button>
      <Button
        onClick={() => {
          showLoading()
          setTimeout(() => {
            hideLoading()
          }, 1000)
        }}
      >
        show loading
      </Button>
      <Image className='img' src={LoginPng} />
      <Button
        onClick={() => {
          Taro.navigateTo({
            url: '/pages/listDemo/index',
          })
        }}
      >
        List Demo
      </Button>
      <Button
        onClick={() => {
          CommonService.testGet().then(res => {
            console.log(res)
          })
        }}
      >
        Get Http request
      </Button>
      <Button
        onClick={() => {
          CommonService.testGetWithLoading().then(res => {
            console.log(res)
          })
        }}
      >
        Get Http request with loading
      </Button>
    </View>
  )
}

export default DemoPage
