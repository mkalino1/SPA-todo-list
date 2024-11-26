<script setup lang="ts">
import { NFlex } from 'naive-ui'
defineProps<{ pathMatch: string[] }>()
</script>

<template>
  <n-flex vertical>
    <h1>404: Not Found</h1>
    <h3>Params found: {{ pathMatch }}</h3>
  </n-flex>
</template>
