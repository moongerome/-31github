let taskInput = document.createElement("input");
taskInput.setAttribute("placeholder", "Gonna do");

let dateInput = document.createElement("input");
dateInput.setAttribute("type", "date");

let addButton = document.createElement("button");
addButton.innerText = "Add";

let taskList = document.createElement("div");
document.body.append(taskInput, dateInput, addButton, taskList);

const deleteTask = (event) => {
  console.dir(event.target.parentNode);
  event.target.parentNode.remove();
};

const done = (e) => {
  const parentEl = e.target.parentNode.classList;
  if (parentEl.contains("done")) {
    parentEl.remove("done");
  } else {
    parentEl.add("done");
  }
};

const createTaskItem = () => {
  let task = taskInput.value;
  let deadline = dateInput.value;
  let closeBtn = document.createElement("button");
  closeBtn.innerText = "x";
  closeBtn.addEventListener("click", deleteTask);
  console.log({ task, deadline });
  //   console.dir(task);
  let taskItem = document.createElement("p");
  taskItem.innerHTML = task + " " + deadline;
  taskList.append(taskItem);
  taskItem.append(closeBtn);
};

addButton.addEventListener("click", createTaskItem);
