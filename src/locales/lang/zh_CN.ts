import { genMessage } from '../helper'
import zhLocale from 'element-plus/lib/locale/lang/zh-cn'

const modules = import.meta.globEager('./zh_CN/**/*.ts')
export default {
  message: {
    el: zhLocale.el,
    ...genMessage(modules, 'zh_CN'),
  },
}
