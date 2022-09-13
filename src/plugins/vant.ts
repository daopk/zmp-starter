import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'
import type { App } from 'vue'

import 'vant/es/toast/style'

export const vant = {
  install(app: App) {
    Locale.use('vi-VN', enUS)
  },
}
