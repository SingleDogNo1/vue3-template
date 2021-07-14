import type { App } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'

import { createI18n } from 'vue-i18n'
import { setHtmlPageLang } from './helper'
import { LocaleSetting, LocaleType } from '#/locale'
import { store } from '@/store'
import { computed, unref } from 'vue'
import ElementPlus from 'element-plus'

const localeSetting: LocaleSetting = {
  locale: 'zh_CN',
  fallback: 'en',
  availableLocales: ['zh_CN', 'en'],
}

const { fallback, availableLocales } = localeSetting

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
  const locale = computed(() => store.state.locale.locale)
  const modules = import.meta.globEager('./lang/*.ts')
  let messages = {}
  setHtmlPageLang(locale.value)

  Object.keys(modules).forEach((path) => {
    // key = './lang/zh_CN.ts'
    // 所以语言信息固定为路径截取 7 位到最后三位
    const lang = path.slice(7, -3)
    const message = modules[path].default?.message ?? {}
    const curMessage = {}
    curMessage[lang] = message
    messages = { ...messages, ...curMessage }
  })

  return {
    legacy: false,
    locale: locale.value,
    fallbackLocale: fallback,
    messages,
    availableLocales: availableLocales,
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true,
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(ElementPlus, {
    i18n: i18n.global.t,
  })
  app.use(i18n)
}

export function changeLocale(locale: LocaleType): LocaleType {
  const globalI18n = i18n.global
  const currentLocale = unref(globalI18n.locale)

  if (currentLocale === locale) return locale

  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    ;(i18n.global.locale as any).value = locale
  }
  store.commit('locale/SET_LOCALE', locale)
  setHtmlPageLang(locale)

  return locale
}
