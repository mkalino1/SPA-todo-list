import { defineStore } from 'pinia'
import { ref } from 'vue'

export default useTodosStore = defineStore('todos', () => {
  const todos = ref([])
  const nextId = 0

  function add_todo(todo_text) {
    todos.value.push({ text: todo_text, id: nextId, is_done: false })
  }

  return { todos, add_todo }
})
