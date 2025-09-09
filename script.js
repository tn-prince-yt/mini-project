const USERNAME = "TDVINITH";
const PASSWORD = "Tdv@2003";
function login() {
    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMsg = document.getElementById('login-error');
    if (usernameInput === USERNAME && passwordInput === PASSWORD) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('todo-container').style.display = 'block';
    errorMsg.style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
} else {
    errorMsg.style.display = 'block';
    }
}
function logout() {
    document.getElementById('todo-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

if (taskText === "") {
    alert("Please enter a task!");
    return;
}
const taskList = document.getElementById('task-list');
const li = document.createElement('li');
li.className = 'task-item';
const span = document.createElement('span');
span.textContent = taskText;
const buttonsDiv = document.createElement('div');
buttonsDiv.className = 'task-buttons';
const doneBtn = document.createElement('button');
doneBtn.textContent = 'Done';
doneBtn.className = 'done-btn';
doneBtn.onclick = function () {
    li.classList.toggle('completed');
};
const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'delete-btn';
deleteBtn.onclick = function () {
    taskList.removeChild(li);
};
buttonsDiv.appendChild(doneBtn);
buttonsDiv.appendChild(deleteBtn);
li.appendChild(span);
li.appendChild(buttonsDiv);
taskList.appendChild(li);
taskInput.value = '';
}
document.getElementById("task-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});
