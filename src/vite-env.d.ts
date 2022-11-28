/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// temporary fix zalo-js-bridge@1.16.3 declaration file path
declare module 'zalo-js-bridge' {
  import App from 'zalo-js-bridge/build/types/index'
  export default App
}

declare module '@vant/touch-emulator' {}
