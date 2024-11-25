<script setup>
import { useTodosStore } from '@/stores/todos'
import { NInput, NFlex, NSwitch, NDrawer, NDrawerContent, NButton } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { id, addmode } = defineProps({
  id: Number,
  addmode: Boolean,
  alonemode: Boolean,
})
const is_done_model = defineModel('is_done')
const text_model = defineModel('text')
const desc_model = defineModel('desc')
const { add_todo } = useTodosStore()
const router = useRouter()
const show = ref(false)

function add() {
  add_todo(text_model.value)
  text_model.value = ''
}

function showTodo() {
  if (addmode) {
    return
  }
  router.push(`/todo/${id}`)
}

function activate() {
  show.value = !show.value
}
</script>

<template>
  <n-drawer v-if="alonemode" v-model:show="show" :width="680" placement="left">
    <n-drawer-content :title="text_model" closable>
      <n-input v-model:value="desc_model" type="textarea" placeholder="Write your description" />
    </n-drawer-content>
  </n-drawer>
  <n-flex align="center" @click.self="showTodo" class="flex-container">
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
  <n-button v-if="alonemode" type="primary" @click="activate"> Show description </n-button>
</template>

<style scoped>
.flex-container {
  padding: 20px;
  background-color: whitesmoke;
}
</style>
