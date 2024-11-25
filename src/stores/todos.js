import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([
    {
      text: 'Practice Pinia',
      desc: 'The intuitive store for Vue.js. Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
      id: 0,
      is_done: false,
    },
    {
      text: 'Practice VueRouter',
      desc: 'The official Router for Vue.js Expressive, configurable and convenient routing for Vue.js',
      id: 1,
      is_done: false,
    },
  ])
  let nextId = todos.value.length

  const done_todos = computed(() => todos.value.filter((item) => item.is_done))
  const in_progress_todos = computed(() => todos.value.filter((item) => !item.is_done))
  const last_todo = computed(() => todos.value.at(-1))

  function add_todo(todo_text) {
    todos.value.push({ text: todo_text, desc: '', id: nextId, is_done: false })
    nextId++
  }

  function reset() {
    todos.value = []
  }

  function todoById(id) {
    return todos.value.find((todo) => todo.id === id)
  }

  return { todos, done_todos, in_progress_todos, last_todo, add_todo, reset, todoById }
})
