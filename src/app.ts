import { useAppUpdate } from '@/hooks/useAppUpdate'
import '@/plugins/http'

import './app.less'

const App = ({ children }) => {
  useAppUpdate()

  return children
}

export default App
