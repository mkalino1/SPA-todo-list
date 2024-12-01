import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import TodoItem from '../TodoItem.vue'
import { createPinia, setActivePinia } from 'pinia'
import { useRouter } from 'vue-router'

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}))

describe('Todo Item', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('renders an empty todo', () => {
    const wrapper = mount(TodoItem)
    const todo_input = wrapper.get('[data-test="todo-input"]')

    expect(todo_input.text()).toContain('Write your idea')
  })

  test('renders an existing todo', () => {
    const wrapper = mount(TodoItem, { props: { text: 'My idea' } })
    const todo_input = wrapper.get('[data-test="todo-input"]')

    expect(todo_input.text()).toContain('My idea')
  })

  test('change the text model value', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        text: 'My idea',
        'onUpdate:text': (e) => wrapper.setProps({ text: e }),
      },
    })
    const todo_input_inner = wrapper.get('[data-test="todo-input"] input')

    await todo_input_inner.setValue('My other idea')

    expect(wrapper.props('text')).toBe('My other idea')
  })

  test('navigate you to todo page if not in addmode', async () => {
    const push = vi.fn()
    useRouter.mockImplementationOnce(() => ({
      push,
    }))
    const wrapper = mount(TodoItem, { props: { id: 1, addmode: false } })
    const inputContainer = wrapper.get('[data-test="input-container"]')

    await inputContainer.trigger('click.self')

    expect(push).toHaveBeenCalledTimes(1)
    expect(push).toHaveBeenCalledWith('/todo/1')
  })

  test('dont navigate you to todo page if in addmode', async () => {
    const push = vi.fn()
    useRouter.mockImplementationOnce(() => ({
      push,
    }))
    const wrapper = mount(TodoItem, { props: { addmode: true } })
    const inputContainer = wrapper.get('[data-test="input-container"]')

    await inputContainer.trigger('click.self')

    expect(push).toHaveBeenCalledTimes(0)
  })
})
