import React, { useCallback } from 'react'
import { View, Button, Image } from '@tarojs/components'
import { hideLoading, showLoading, showToast } from '@/utils/ui'
import LoginPng from '@/assets/img/common/login2.png'

import './index.less'

/**
 * Demo
 */
const DemoPage: React.FC = () => {
  return (
    <View className='DemoPage'>
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
    </View>
  )
}

export default DemoPage
