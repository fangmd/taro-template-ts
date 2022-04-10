import React from 'react'
import { useAppUpdate } from '@/hooks/useAppUpdate'
import '@/plugins/http'

import { Provider, commonStore } from './store/context'

import './app.less'

/**App 入口 */
const App: React.FC = ({ children }) => {
  useAppUpdate()

  return <Provider>{children}</Provider>
}

export default App
