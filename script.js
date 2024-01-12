const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEl.value === "") {
    alert("Please enter a task");
  } else if (localStorage.getItem(inputEl.value) === null) {
    localStorage.setItem(inputEl.value, inputEl.value);

    let taskName = localStorage.getItem(inputEl.value);
    let task = document.createElement("li");
    let spanEl = document.createElement("span");
    let delButtonEl = document.createElement("button");

    task.setAttribute("id", "item");
    spanEl.innerHTML = taskName;
    delButtonEl.setAttribute("id", "delete");
    delButtonEl.innerHTML = "X";

    task.appendChild(spanEl);
    task.appendChild(delButtonEl);
    outputEl.appendChild(task);

    inputEl.value = "";

    delButtonEl.addEventListener("click", () => {
      removeTask(delButtonEl);
    });
  } else {
    alert("Task already present");
    inputEl.value = "";
  }
});

function removeTask(button) {
  let spanEl = button.previousElementSibling;
  localStorage.removeItem(spanEl.innerHTML);
  outputEl.removeChild(button.parentElement);
}
