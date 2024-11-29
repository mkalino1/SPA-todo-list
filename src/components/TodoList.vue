<script setup lang="ts">
import { computed, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { NFlex, NMessageProvider, useMessage } from 'naive-ui'
import { useActiveElement } from '@vueuse/core'

const activeElement = useActiveElement()
watch(activeElement, () => {
  createMessage()
})
const message = useMessage()
function createMessage() {
  message.info('Write your ideas', { duration: 2000 })
}

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
    <n-message-provider>
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        v-bind="todo"
        v-model:isDone="todo.isDone"
        v-model:text="todo.text"
      />
    </n-message-provider>
  </n-flex>
</template>
