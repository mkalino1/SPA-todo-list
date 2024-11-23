<script setup>
import { computed } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const { todos, done_todos } = storeToRefs(useTodosStore())
const props = defineProps(['filter'])
const filteredTodos = computed(() => {
  switch (props.filter) {
    case 'done':
      return done_todos.value
    default:
      return todos.value
  }
})
</script>

<template>
  <TodoItem
    v-for="todo in filteredTodos"
    :key="todo.id"
    v-bind="todo"
    v-model:is_done="todo.is_done"
    v-model:text="todo.text"
  />
</template>
