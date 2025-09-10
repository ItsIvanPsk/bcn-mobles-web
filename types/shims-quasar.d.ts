declare module '#q-app/wrappers' {
  import type { App } from 'vue'

  export function defineBoot(bootFn: (ctx: { app: App }) => void): (ctx: { app: App }) => void

  export function defineRouter(fn: () => unknown): unknown

  export function defineStore(fn: () => unknown): unknown
}
