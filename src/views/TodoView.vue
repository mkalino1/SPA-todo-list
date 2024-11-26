<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { NFlex } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const { todoById } = useTodosStore()
const { id } = defineProps<{ id: number }>()

const todo = todoById(+id)

if (!todo) {
  router.push({ name: 'not-found' })
}
</script>

<template>
  <main>
    <n-flex vertical>
      <TodoItem
        v-if="todo"
        v-bind="todo"
        v-model:isDone="todo.isDone"
        v-model:text="todo.text"
        v-model:desc="todo.desc"
        alonemode
      />
    </n-flex>
  </main>
</template>
