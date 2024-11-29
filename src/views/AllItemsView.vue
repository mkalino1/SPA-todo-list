<script setup lang="ts">
import ResetButton from '@/components/ResetButton.vue'
import TodoItem from '@/components/TodoItem.vue'
import TodoList from '@/components/TodoList.vue'
import { NFlex, NMessageProvider } from 'naive-ui'
</script>

<template>
  <main>
    <n-flex vertical>
      <n-message-provider>
        <TodoList />
      </n-message-provider>
      <TodoItem addmode />
      <ResetButton />
    </n-flex>
  </main>
</template>
