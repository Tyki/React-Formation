import { action, observable } from 'mobx'
import uuidv4 from 'uuid/v4'

class TodoStore {
  // properties
  @observable todos = []

  // actions
  @action setTodos(todos) {
    this.todos = todos
  }

  @action addTodo(title, description) {
    this.todos.push(
      {
        id: uuidv4(),
        title,
        description
      }
    )
  }

  @action deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id)
  }

  @action editTodo(id, title, description) {
    this.todos = this.todos.map((todo) => {
      if (todo.id !== id) { return todo}
      else {
        todo.title = title
        todo.description = description

        return todo
      }
    })
  }
}

export const todoStore = new TodoStore()