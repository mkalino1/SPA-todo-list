import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import TodoList from '../TodoList.vue'
import { createTestingPinia } from '@pinia/testing'

describe('Todo List', () => {
  it('should render default todos', () => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      },
    })
    const todos = wrapper.findAll('[data-test="todo-input"]')

    expect(todos).toHaveLength(2)
  })

  it('should show no default done todos', async () => {
    const wrapper = mount(TodoList, {
      props: { filter: 'done' },
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      },
    })
    const todos = wrapper.findAll('[data-test="todo-input"]')

    expect(todos).toHaveLength(0)
  })
})
