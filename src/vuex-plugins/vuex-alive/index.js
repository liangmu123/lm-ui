import omit from 'lodash/omit'
import pick from 'lodash/pick'
import cloneDeep from 'lodash/cloneDeep'
import defaultsDeep from 'lodash/defaultsDeep'

import Storage from './Storage'

const serialize = (value) => JSON.stringify(value, null, 2)

const deserialize = (value) => JSON.parse(value)

class VuexAlive {
  constructor ({ name = 'vuex-alive', local, session }) {
    this.name = name
    this.local = local
    this.session = session
    this.localDBService = new Storage({ name, db: window.localStorage, serialize, deserialize })
    this.sessionDBService = new Storage({ name, db: window.sessionStorage, serialize, deserialize })
  }
  saveData (state) {
    if (this.local) {
      let { list, isFilter } = this.local
      let localState = cloneDeep(state)
      localState = isFilter ? omit(localState, list) : pick(localState, list)
      this.localDBService.write(this.name, localState)
    }
    if (this.session) {
      let { list, isFilter } = this.session
      let sessionState = cloneDeep(state)
      sessionState = isFilter ? omit(sessionState, list) : pick(sessionState, list)
      this.sessionDBService.write(this.name, sessionState)
    }
  }
  restoreData (store) {
    let name = this.name
    store.replaceState(
      defaultsDeep(
        this.sessionDBService.read(name),
        this.localDBService.read(name),
        store.state
      )
    )
  }
  clear (local = true, session = false) {
    let name = this.name
    if (local) {
      this.localDBService.delete(name)
    }
    if (session) {
      this.sessionDBService.delete(name)
    }
  }
}

export default (options) => {
  let vuexAlive = new VuexAlive(options)
  let fn = (store) => {
    vuexAlive.restoreData(store)
    store.subscribe((_mutation, state) => vuexAlive.saveData(state))
  }
  fn.clear = vuexAlive.clear.bind(vuexAlive)
  return fn
}
