import { action, observable } from 'mobx'

class TodoStore {
  // properties
  @observable todos = []

  // actions
  @action setTodos(todos) {
    this.todos = todos
  }
}

export const todoStore = new TodoStore()