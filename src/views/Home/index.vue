<template>
  <div class="home">
    {{ name }} -- {{ token }}
    <el-button @click="changeName('李四')">按钮</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore()

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
    }
  },
})
</script>

<style scoped lang="scss">
.home {
  color: red;
}
</style>
