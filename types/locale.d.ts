export type LocaleType = 'zh_CN' | 'en'

export interface LocaleSetting {
  /** 当前语言 */
  locale: LocaleType
  /** 默认语言 */
  fallback: LocaleType
  /** 所有可选语言 */
  availableLocales: LocaleType[]
}

export enum LOCALE {
  ZH_CN = 'zh_CN',
  EN_US = 'en',
}
