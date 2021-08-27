<template>
  <el-select v-model="lang" @change="change">
    <el-option label="中文" value="zh_CN" />
    <el-option label="英文" value="en" />
  </el-select>
  <button class="px-4 py-2 border rounded border-dark-800" @click="num++">{{ num }}</button>
  <router-view />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { changeLocale } from './locales'
import { useStore } from './store'

const store = useStore()
const lang = computed(() => store.state.locale.locale)

function change(value) {
  changeLocale(value)
}

const num = ref(0)
</script>
