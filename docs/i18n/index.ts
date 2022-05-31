import { createI18n } from 'vue-i18n'
import zhCN from './zh-CN'
import enUS from './en-US'

export const langOptions = ['zh-CN', 'en-US'] as const

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: langOptions.find(l => l === navigator.language) || __ROLLBACK_LANG__,
  fallbackLocale: __ROLLBACK_LANG__,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})