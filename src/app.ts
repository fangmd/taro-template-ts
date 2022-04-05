import { useAppUpdate } from '@/hooks/useAppUpdate'
import '@/plugins/http'

import './app.less'

/**App 入口 */
const App = ({ children }) => {
  useAppUpdate()

  return children
}

export default App
