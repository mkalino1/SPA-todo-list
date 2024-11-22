<script setup>
import { NInput, NFlex, NSwitch } from 'naive-ui'
const is_done_model = defineModel('is_done')
const text_model = defineModel('text')
</script>

<template>
  <n-flex style="background: lightcoral">
    <n-switch v-model:value="is_done_model" />
    <n-input v-model:value="text_model" type="text" placeholder="Write your idea" autosize />
  </n-flex>
</template>
