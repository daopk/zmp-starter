import { defineStore } from 'pinia'
import api from 'zmp-sdk'

export const useAppStore = defineStore('app', () => {
  return {
    params: api.getRouteParams(),
  }
})
