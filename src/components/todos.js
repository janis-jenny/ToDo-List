
export default class Todos {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.todoList = document.getElementById('todo-list-container');
  }

  addTodo(project, task) {
    project.tasks.push(task),
    console.log(project)
  }

  renderTodo(project) {
    this.todoList.textContent = '';
    const contTodo = project.tasks.map(item => `<ul class="todoCard">
                                                <li>${item.title}</li>
                                                <li>${item.description}</li>
                                                <li><button class="todo-delete">Delete</button></li>
                                                </ul>`);
    this.todoList.insertAdjacentHTML('afterbegin', contTodo);
  
  }

}