<template>
  <el-select v-model="lang" @change="change">
    <el-option label="中文" value="zh_CN" />
    <el-option label="英文" value="en" />
  </el-select>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { changeLocale } from './locales'
import { useStore } from './store'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const lang = computed(() => store.state.locale.locale)
    const state = reactive({
      lang: lang.value,
    })
    function change(value) {
      changeLocale(value)
    }
    return {
      ...toRefs(state),
      change,
    }
  },
})
</script>

<style></style>
