<script setup>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { NFlex } from 'naive-ui'

const { todos, done_todos, in_progress_todos } = storeToRefs(useTodosStore())
const props = defineProps(['filter'])
const filteredTodos = computed(() => {
  switch (props.filter) {
    case 'done':
      return done_todos.value
    case 'in_progress':
      return in_progress_todos.value
    default:
      return todos.value
  }
})
</script>

<template>
  <n-flex vertical v-auto-animate>
    <TodoItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      v-bind="todo"
      v-model:is_done="todo.is_done"
      v-model:text="todo.text"
    />
  </n-flex>
</template>
