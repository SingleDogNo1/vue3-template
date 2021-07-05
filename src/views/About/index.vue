<template>
  <div class="about">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    const state = reactive({
      msg: 'hello, about',
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="scss">
.about {
  color: red;
}
</style>
