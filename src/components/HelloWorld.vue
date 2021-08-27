<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
interface Props {
  msg: string
}

withDefaults(defineProps<Props>(), {
  msg: 'hello, world',
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
