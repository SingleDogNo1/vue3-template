import { Module } from 'vuex'
import RootState from '@/store/types'
import UserState from './types'

const userModule: Module<UserState, RootState> = {
  namespaced: true,
  state: {
    token: 'AUTH_TOKEN_123456',
    name: '赵晨敏',
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
  },
}

export default userModule
