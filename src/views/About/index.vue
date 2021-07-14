<template>
  <div class="about">
    <div>{{ t('login.password') }}</div>
    <!-- <div>{{ locale }}</div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useI18n } from '@/hooks/useI18n'

export default defineComponent({
  name: 'About',
  setup() {
    const state = reactive({
      msg: 'hello, about',
    })

    const { t } = useI18n()

    return {
      ...toRefs(state),
      t,
    }
  },
})
</script>

<style scoped lang="scss">
.about {
  color: red;
}
</style>
