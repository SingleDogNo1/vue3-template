<template>
  <div class="home">
    {{ name }} -- {{ token }}
    <el-button
      icon="el-icon-delete"
      :style="{ color: styles.themeColor }"
      @click="changeName('李四')"
    >
      按钮
    </el-button>
    <button class="px-4 py-2 border rounded border-dark-800 btn">button</button>

    <HelloWorld msg="asdajsdla" />
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useStore } from '@/store'
import { useGlobCss } from '@/hooks/useGlobCss'
import { getUserInfoApi } from '@/api/user'
import { cloneDeep } from 'lodash-es'
import HelloWorld from '../../components/HelloWorld.vue'

const store = useStore()
const styles = useGlobCss()

const name = computed(() => store.state.user.name)
const token = computed(() => store.state.user.token)

function changeName(name) {
  store.commit('user/SET_NAME', name)
}

onMounted(() => {
  getUserInfoApi().then((res) => {
    console.log('res :>> ', res)
  })
})

console.log('cloneDeep :>> ', cloneDeep({ msg: '13213' }))
</script>

<style lang="scss">
.btn {
  @include center;

  color: $--color-danger;
}
</style>
