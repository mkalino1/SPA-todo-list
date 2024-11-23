import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([
    { text: 'Practice Pinia', id: 0, is_done: false },
    { text: 'Practice VueRouter', id: 1, is_done: false },
  ])
  let nextId = 0

  const done_todos = computed(() => todos.value.filter((item) => item.is_done))

  function add_todo(todo_text) {
    todos.value.push({ text: todo_text, id: nextId, is_done: false })
    nextId++
  }

  function reset() {
    todos.value = []
  }

  return { todos, done_todos, add_todo, reset }
})
