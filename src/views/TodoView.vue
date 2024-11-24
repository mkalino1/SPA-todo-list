<script setup>
import TodoItem from '@/components/TodoItem.vue'
import { useTodosStore } from '@/stores/todos'
import { NFlex } from 'naive-ui'
import { useRouter } from 'vue-router'

const router = useRouter()
const { todoById } = useTodosStore()
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

const todo = todoById(+props.id)

if (!todo) {
  router.push({ name: 'not-found' })
}
</script>

<template>
  <main>
    <n-flex vertical>
      <TodoItem v-if="todo" v-bind="todo" v-model:is_done="todo.is_done" v-model:text="todo.text" />
    </n-flex>
  </main>
</template>
