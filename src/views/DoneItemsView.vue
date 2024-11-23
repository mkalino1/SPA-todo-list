<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
const { done_todos } = storeToRefs(useTodosStore())
</script>

<template>
  <main>
    <TodoItem
      v-for="todo in done_todos"
      :key="todo.id"
      v-bind="todo"
      v-model:is_done="todo.is_done"
      v-model:text="todo.text"
    />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
