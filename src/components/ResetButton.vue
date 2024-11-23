<script setup>
import { useTodosStore } from '@/stores/todos'
import { NButton } from 'naive-ui'

const store = useTodosStore()

function reset() {
  store.reset()
}
</script>

<template>
  <n-button round @click="reset" type="primary">Reset list</n-button>
</template>
