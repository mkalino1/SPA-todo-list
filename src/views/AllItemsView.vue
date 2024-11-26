<script setup lang="ts">
import ResetButton from '@/components/ResetButton.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoList from '@/components/TodoList.vue'
import { NFlex } from 'naive-ui'
</script>

<template>
  <main>
    <n-flex vertical>
      <TodoList />
      <TodoItem addmode />
      <ResetButton />
    </n-flex>
  </main>
</template>
