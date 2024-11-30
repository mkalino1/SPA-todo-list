import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([
    {
      text: 'Practice Pinia',
      desc: 'The intuitive store for Vue.js. Type Safe, Extensible, and Modular by design. Forget you are even using a store.',
      id: 0,
      isDone: false,
    },
    {
      text: 'Practice VueRouter',
      desc: 'The official Router for Vue.js Expressive, configurable and convenient routing for Vue.js',
      id: 1,
      isDone: false,
    },
  ])
  let nextId = todos.value.length

  const doneTodos = computed(() => todos.value.filter((item) => item.isDone))
  const inProgressTodos = computed(() => todos.value.filter((item) => !item.isDone))
  const lastTodo = computed(() => todos.value.at(-1))

  function add_todo(todo_text: string | undefined) {
    if (!todo_text) {
      return
    }
    todos.value.push({ text: todo_text, desc: '', id: nextId, isDone: false })
    nextId++
  }

  function reset() {
    todos.value = []
  }

  function todoById(id: number) {
    return todos.value.find((todo) => todo.id === id)
  }

  return {
    todos,
    doneTodos: doneTodos,
    inProgressTodos: inProgressTodos,
    lastTodo: lastTodo,
    add_todo,
    reset,
    todoById,
  }
})
