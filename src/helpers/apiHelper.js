export const fetchTodoList = () => {
  return fetch('http://localhost:3001/getTodos')
    .then(response => response.json())
}