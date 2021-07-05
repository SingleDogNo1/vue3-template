<template>
  <div class="about">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { getList } from '@/api/index'

export default defineComponent({
  name: 'About',
  setup() {
    const state = reactive({
      msg: 'hello, about',
    })

    onMounted(() => {
      getList().then((res) => {
        console.log('res :>> ', res)
      })
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
