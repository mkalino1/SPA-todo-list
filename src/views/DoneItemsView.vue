<script setup>
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <main>
    <TodoList filter="done" />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
