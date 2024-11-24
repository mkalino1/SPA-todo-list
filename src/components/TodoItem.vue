<script setup>
import { useTodosStore } from '@/stores/todos'
import { NInput, NFlex, NSwitch } from 'naive-ui'
import { useRouter } from 'vue-router'

const { id, addmode } = defineProps({ id: Number, addmode: Boolean })
const is_done_model = defineModel('is_done')
const text_model = defineModel('text')
const { add_todo } = useTodosStore()
const router = useRouter()

function add() {
  add_todo(text_model.value)
  text_model.value = ''
}

function showTodo() {
  if (addmode) {
    return
  }
  router.push(`/todo/${id}`)
}
</script>

<template>
  <n-flex align="center" @click.self="showTodo" class="flex-container">
    <n-input
      v-model:value="text_model"
      type="text"
      placeholder="Write your idea"
      autosize
      style="flex-grow: 1"
      @keyup.enter="add"
    >
      <template #prefix>🐦</template>
      <template #suffix v-if="!addmode">Id: {{ id }}</template>
    </n-input>
    <n-switch v-model:value="is_done_model" v-if="!addmode" />
  </n-flex>
</template>

<style scoped>
.flex-container {
  padding: 20px;
  background-color: whitesmoke;
}
</style>
