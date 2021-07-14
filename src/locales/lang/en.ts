import { genMessage } from '../helper'
import enLocale from 'element-plus/lib/locale/lang/en'

const modules = import.meta.globEager('./en/**/*.ts')
export default {
  message: {
    el: enLocale.el,
    ...genMessage(modules, 'en'),
  },
}
