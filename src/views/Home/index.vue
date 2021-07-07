<template>
  <div class="home">
    {{ name }} -- {{ token }}
    <el-button :style="{ color: styles.themeColor }" @click="changeName('李四')">按钮</el-button>
    <button class="px-4 py-2 border rounded border-dark-800 btn">button</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from '@/store'
import { useGlobCss } from '@/hooks/globCss'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()
    const styles = useGlobCss()

    const state = reactive({
      msg: 'hello, home',
    })

    const name = computed(() => store.state.user.name)
    const token = computed(() => store.state.user.token)

    function changeName(name) {
      store.commit('user/SET_NAME', name)
    }

    return {
      ...toRefs(state),
      name,
      token,
      changeName,
      styles,
    }
  },
})
</script>

<style lang="scss">
.btn {
  // color: $--color-danger;
  color: red;
}
</style>
