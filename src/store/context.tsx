import React from 'react'
import { useLocalObservable } from 'mobx-react-lite'
import { createCommonStore } from './commonStore'

// eslint-disable-next-line import/no-mutable-exports
let commonStore: any = {}

export { commonStore }

export const StoreContext = React.createContext<any>(null)

export const useStore = () => {
  const store = React.useContext<any>(StoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export function Provider({ children }) {
  commonStore = useLocalObservable(createCommonStore)

  const store = {
    commonStore,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
