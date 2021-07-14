import UserState from './modules/user/types'
import LocaleModule from './modules/locale/types'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export default interface RootState {}

export interface AllState extends RootState {
  user: UserState
}
export interface AllState extends RootState {
  locale: LocaleModule
}
