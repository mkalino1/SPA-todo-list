<script setup lang="ts">
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { NFlex } from 'naive-ui'

const { todos, doneTodos, inProgressTodos } = storeToRefs(useTodosStore())
const { filter } = defineProps<{ filter?: string }>()
const filteredTodos = computed(() => {
  switch (filter) {
    case 'done':
      return doneTodos.value
    case 'in_progress':
      return inProgressTodos.value
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
      v-model:isDone="todo.isDone"
      v-model:text="todo.text"
    />
  </n-flex>
</template>
