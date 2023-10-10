const todoList = [];

const todoField = document.querySelector("#task");
const section = document.querySelector("section");

let template = `
  <h2>Todo List</h2>
  <ul></ul>
`
section.innerHTML = template;

document.querySelector("#todoForm").addEventListener('submit', function(e) {
  e.preventDefault();

  todoList.push(todoField.value);

  const listTemplate = todoList.map(entry => `
    <li>${entry}</li>
  `);
  document.querySelector("ul").innerHTML = listTemplate.join('');

  todoForm.reset();
});
