<script setup>
import ResetButton from '@/components/ResetButton.vue'
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'
import { NFlex } from 'naive-ui'
const { todos } = storeToRefs(useTodosStore())
</script>

<template>
  <main>
    <n-flex vertical>
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        v-bind="todo"
        v-model:is_done="todo.is_done"
        v-model:text="todo.text"
      />
      <TodoItem addmode />
      <ResetButton />
    </n-flex>
  </main>
</template>
