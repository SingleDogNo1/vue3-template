import { Module } from 'vuex'
import RootState from '@/store/types'
import LocaleState from './types'

const LocaleModule: Module<LocaleState, RootState> = {
  namespaced: true,
  state: {
    locale: 'en',
  },
  mutations: {
    SET_LOCALE: (state, locale) => {
      state.locale = locale
    },
  },
}

export default LocaleModule
