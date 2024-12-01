import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AllItemsView from '../AllItemsView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useTodosStore } from '@/stores/todos'

describe('All Items View', () => {
  let wrapper
  let todosElements
  let store

  beforeEach(() => {
    wrapper = mount(AllItemsView, {
      global: {
        plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })],
      },
    })
    todosElements = wrapper.findAll('[data-test=todo-input]')
    store = useTodosStore()
  })

  it('renders default plus empty todos', () => {
    expect(todosElements).toHaveLength(3)
  })

  it('adds new todo', async () => {
    await todosElements.at(-1).get('input').setValue('My new idea')
    await todosElements.at(-1).get('input').trigger('keyup.enter')

    todosElements = wrapper.findAll('[data-test=todo-input]')
    expect(todosElements).toHaveLength(4)
    expect(store.add_todo).toHaveBeenCalledOnce()
  })
})
