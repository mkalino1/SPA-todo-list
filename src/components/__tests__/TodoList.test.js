import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import TodoList from '../TodoList.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Todo List', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render default todos', () => {
    const wrapper = mount(TodoList)
    const todos = wrapper.findAll('[data-test="todo-input"]')

    expect(todos).toHaveLength(2)
  })

  it('should show no default done todos', async () => {
    const wrapper = mount(TodoList, { props: { filter: 'done' } })
    const todos = wrapper.findAll('[data-test="todo-input"]')

    expect(todos).toHaveLength(0)
  })
})
