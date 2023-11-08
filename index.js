const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const registerbtn = document.querySelector(".register-btn");
const btnpopup = document.querySelector(".loginbtn-popup");
const closebtn = document.querySelector(".close");
if (registerLink) {
  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });
}
if (loginLink) {
  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });
}
if (btnpopup) {
  btnpopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
  });
}
if (closebtn) {
  closebtn.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
  });
}

// registerbtn.addEventListener('click',()=>{
//   wrapper.classList.add('active');
// })
// function toLogin(){
//   registerbtn.addEventListener('click',()=>{
//     wrapper.classList.add('active');
//     console.log('clicked');
//   })
// }

// function redirectToHome(){
//   window.location.href = "C:\Users\Welcome\Desktop\senchola-internship\workouts\day23\Form-Validation\sample1\home.html";
// }

let currentUser = null;
let todos = [];
const registerForm = document.querySelector(".registerForm");
const loginForm = document.querySelector(".loginForm");
const logoutButton = document.querySelector(".logoutbtn-popup");
const todologoutbtn = document.querySelector(".todologoutbtn");

//todo
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addTodoButton = document.querySelector('.add-todo')
//todo edited
const todowrapper = document.querySelector('.todo-wrapper');

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("s-username").value;
    const email = document.getElementById("s-email").value;
    const password = document.getElementById("s-password").value;

    currentUser = { username, email, password };
    wrapper.classList.remove("active");
    console.log("register successful", currentUser);
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("l-email").value;
    const password = document.getElementById("l-password").value;
    console.log(email);
    console.log(password);
    console.log(currentUser);
    // Validate the login credentials.
    if (
      currentUser &&
      currentUser.email === email &&
      currentUser.password === password
    ) {
      updateTodoList();
      todowrapper.style.display= 'block';
      wrapper.style.display='none';
      btnpopup.style.display='none';
      // window.location.href = "home.html";
      console.log("clicked loged");
    }
  });
}

if (logoutButton) {
  logoutButton.addEventListener("click", () => {
    currentUser = null;
    todos = [];
    todoInput.value = "";
    todoList.innerHTML = "";
    window.location.href = "index.html";
    function preventBack() {
      window.history.forward();
    }
    setTimeout("preventBack()", 0);
    window.onunload = function () {
      null;
    };
    console.log("logout");
  });
}
if (todologoutbtn) {
  todologoutbtn.addEventListener("click", () => {
    currentUser = null;
    todos = [];
    todoInput.value = "";
    todoList.innerHTML = "";
    window.location.href = "index.html";
    function preventBack() {
      window.history.forward();
    }
    setTimeout("preventBack()", 0);
    window.onunload = function () {
      null;
    };
    console.log("logout");
  });
}

if(addTodoButton){
  addTodoButton.addEventListener('click', () => {
    const newTodo = todoInput.value;
    if (newTodo.trim() !== '') {
        todos.push(newTodo);
        todoInput.value = '';
        updateTodoList();
    }
  });

}

function updateTodoList() {
  console.log('todolist',todos);
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const updatedTodo = prompt("Edit your todo:", todo);
      if (updatedTodo !== null) {
        todos[index] = updatedTodo;
        updateTodoList();
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to delete this todo?")) {
        todos.splice(index, 1);
        updateTodoList();
      }
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}
