<template>
  <div class="about">
    <div>{{ t('login.password') }}</div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '@/hooks/useI18n'

const { t } = useI18n()
</script>

<style scoped lang="scss">
.about {
  color: red;
}
</style>
