<template>
  <router-view v-if="ready" />
  <LoadingScreen v-else />
</template>

<script lang="ts" setup>
import LoadingScreen from './screens/LoadingScreen.vue'
import api from 'zmp-sdk'
import { ref } from 'vue'

const ready = ref(false)

api.login({
  success(res) {
    ready.value = true
  },
})
</script>
