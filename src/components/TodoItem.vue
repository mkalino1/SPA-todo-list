<script setup>
import { useTodosStore } from '@/stores/todos'
import { NInput, NLayout, NFlex, NSwitch } from 'naive-ui'
const { id, addmode } = defineProps({ id: Number, addmode: Boolean })
const is_done_model = defineModel('is_done')
const text_model = defineModel('text')
const { add_todo } = useTodosStore()

function add() {
  add_todo(text_model.value)
  text_model.value = ''
}
</script>

<template>
  <n-layout embedded content-style="padding: 20px;">
    <n-flex align="center">
      <n-input
        v-model:value="text_model"
        type="text"
        placeholder="Write your idea"
        autosize
        style="flex-grow: 1"
        @keyup.enter="add"
      >
        <template #prefix>🐦</template>
        <template #suffix v-if="!addmode">Id: {{ id }}</template>
      </n-input>
      <n-switch v-model:value="is_done_model" v-if="!addmode" />
    </n-flex>
  </n-layout>
</template>
