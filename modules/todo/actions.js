import { v4 as uuid } from 'node-uuid'
let nextTodoId = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: uuid(),
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
