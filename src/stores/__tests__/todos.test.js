import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useTodosStore } from '../todos'

describe('Todos Store', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTodosStore()
  })

  it('have 2 todos as default', () => {
    expect(store.todos).toHaveLength(2)
  })

  it('add a todo', () => {
    store.add_todo('My new idea')

    expect(store.todos).toHaveLength(3)
  })

  it('filter done todos', () => {
    store.todos.at(-1).isDone = true

    expect(store.doneTodos).toHaveLength(1)
  })

  it('reset todos list', () => {
    store.reset()

    expect(store.todos).toHaveLength(0)
    expect(store.doneTodos).toHaveLength(0)
    expect(store.inProgressTodos).toHaveLength(0)
  })
})
