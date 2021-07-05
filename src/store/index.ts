import { InjectionKey, App } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { AllState } from './types'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'

export const store = createStore<AllState>({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  modules: {
    user,
  },
})

export const key: InjectionKey<Store<AllState>> = Symbol('vue-store')

export function useStore<T = AllState>(): Store<T> {
  return baseUseStore<T>(key)
}

// config-store
export function setupStore(app: App<Element>) {
  app.use(store, key)
}
