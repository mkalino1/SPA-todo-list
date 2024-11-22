<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { ref } from 'vue'

const todos = ref([
  { text: 'Practice Pinia', id: 0, is_done: false },
  { text: 'Practice VueRouter', id: 0, is_done: false },
])
</script>

<template>
  <main>
    <TodoItem v-for="todo in todos" :key="todo.id" v-bind="todo" />
  </main>
</template>
