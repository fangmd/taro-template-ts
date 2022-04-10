import React, { useCallback, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { hideLoading, showLoading, showToast } from '@/utils/ui'
import LoginPng from '@/assets/img/common/login2.png'
import { Button } from '@antmjs/vantui'
import Taro, { useDidShow } from '@tarojs/taro'
import { CommonService } from '@/services/CommonService'

import './index.less'

/**
 * Demo
 */
const DemoPage: React.FC = () => {
  useEffect(() => {
    console.log('DemoPage init')
  }, [])

  useDidShow(() => {
    console.log('DemoPage show')
  })

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
          Taro.navigateTo({
            url: '/pages/tabListDemo/index',
          })
        }}
      >
        Tab List Demo
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
