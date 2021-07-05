<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const state = reactive({
      msg: 'hello, home',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="scss">
.home {
  color: red;
}
</style>
