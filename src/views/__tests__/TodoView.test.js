import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoView from '../TodoView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useRouter } from 'vue-router'

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: () => {},
  })),
}))
describe('Todo View', () => {
  it('should redirect to not found if wrong id', () => {
    const push = vi.fn()
    useRouter.mockImplementationOnce(() => ({
      push,
    }))
    mount(TodoView, {
      global: { plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })] },
      props: { id: 9 },
    })

    expect(push).toBeCalled()
    expect(push).toBeCalledWith({ name: 'not-found' })
  })

  it('should get todo from store based on route parameter', () => {
    const wrapper = mount(TodoView, {
      global: { plugins: [createTestingPinia({ stubActions: false, createSpy: vi.fn })] },
      props: { id: 0 },
    })

    expect(wrapper.findAll('[data-test="todo-input"]')).toHaveLength(1)
    expect(wrapper.find('[data-test="todo-input"]').text()).toContain('Practice Pinia')
  })
})
