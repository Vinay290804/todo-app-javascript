const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});