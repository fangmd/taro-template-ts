import { makeObservable, observable, action } from 'mobx'

class CommonStore {
  counter = 0

  constructor() {
    makeObservable(this, {
      counter: observable,
      addCounter: action,
      incrementAsync: action,
    })
  }

  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }

  addCounter() {
    this.counter++
  }
}

function createCommonStore() {
  return new CommonStore()
}

export { createCommonStore }
