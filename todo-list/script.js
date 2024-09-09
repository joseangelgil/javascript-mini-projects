const addTaskBtn = document.getElementById("add-task");
const tasksContainer = document.querySelector(".tasks");

const taskList = [];

function addTask() {
  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.innerHTML += `
  <input type="text">
  <i id="${taskList.length}" class="fa-solid fa-xmark close"></i>
  `;
  tasksContainer.appendChild(newTask);
  taskList.push("newTask");

  const deleteBtn = document.getElementById(`${taskList.length - 1}`);
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
}

addTaskBtn.addEventListener("click", () => {
  addTask()
});







