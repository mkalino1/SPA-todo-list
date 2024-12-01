<script setup lang="ts">
import { useTodosStore } from '@/stores/todos'
import { NInput, NFlex, NSwitch, NDrawer, NDrawerContent, NButton } from 'naive-ui'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { id, addmode } = defineProps<{
  id?: number
  addmode?: boolean
  alonemode?: boolean
}>()
const isDoneModel = defineModel<boolean>('isDone')
const textModel = defineModel<string>('text')
const descModel = defineModel<string>('desc')
const { add_todo } = useTodosStore()
const router = useRouter()
const showDrawer = ref(true)

function add() {
  if (!addmode) {
    return
  }
  add_todo(textModel.value)
  textModel.value = ''
}

function showTodo() {
  if (addmode) {
    return
  }
  router.push(`/todo/${id}`)
}

function activate() {
  showDrawer.value = !showDrawer.value
}
</script>

<template>
  <n-drawer v-if="alonemode" v-model:show="showDrawer" :width="680" placement="left">
    <n-drawer-content :title="textModel" closable>
      <n-input v-model:value="descModel" type="textarea" placeholder="Write your description" />
    </n-drawer-content>
  </n-drawer>
  <n-flex align="center" @click.self="showTodo" class="flex-container" data-test="input-container">
    <n-input
      v-model:value="textModel"
      type="text"
      placeholder="Write your idea"
      autosize
      style="flex-grow: 1"
      @keyup.enter="add"
      data-test="todo-input"
    >
      <template #prefix>🐦</template>
      <template #suffix v-if="!addmode">Id: {{ id }}</template>
    </n-input>
    <n-switch v-model:value="isDoneModel" v-if="!addmode" />
  </n-flex>
  <n-button v-if="alonemode" type="primary" @click="activate"> Show description </n-button>
</template>

<style scoped>
.flex-container {
  padding: 20px;
  background-color: whitesmoke;
}
</style>
