import React, {  useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { PowerScrollView } from '@antmjs/vantui'

import './index.less'

interface ItemProps {
  data: Object
}

const Item: React.FC<ItemProps> = () => {
  return <View className='ListDemoPageItem__root'>123</View>
}

interface ListData {
  data: any[]
  noMore: boolean | undefined
}

/**
 * ListDemoPage
 */
const ListDemoPage: React.FC = () => {
  const [listData, setListData] = useState<ListData>({
    data: [],
    noMore: false,
  })

  useEffect(() => {
    onRefresh(0)
  }, [])

  const loadData = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 2])
      }, 800)
    })
  }

  const onRefresh = async event => {
    console.log('onRefresh', event)
    const d = await loadData()
    console.log('onRefresh', d.length)
    setListData({
      data: d,
      noMore: false,
    })
  }

  const onLoadMore = async event => {
    console.log('onLoadMore')
    const d = await loadData()
    console.log('onRefresh', d.length)
    setListData({
      data: [...listData.data, ...d],
      noMore: d.length === 0,
    })
  }

  return (
    <View className='ListDemoPage__root'>
      <PowerScrollView
        finishedText='没有更多了'
        className='pull-list'
        successText='刷新成功'
        lowerThreshold={300}
        onScrollToUpper={onRefresh}
        onScrollToLower={onLoadMore}
        current={listData.data?.length ?? 0}
        finished={listData.noMore}
      >
        {listData.data && listData.data.map((e, i) => <Item key={i} data={e} />)}
      </PowerScrollView>
    </View>
  )
}

export default ListDemoPage
