function addTask() {
    const inputTask = document.querySelector('#adderTask')
    const taskList = document.querySelector('#myTasks')
    if (inputTask.value.trim() === '') {
        alert('Você precisa escrever algo!')
        inputTask.value = ""
    } else {
        taskList.innerHTML += `<li class="list" ><p class ='task' onclick ='check(this)'>${inputTask.value}</p> <button class="commandBtns editBtn" onclick="editTask(this)">Editar</button>
        <button class="commandBtns deleteBtn" onclick="deleteElement(this)">X</button> </li>`
        inputTask.value = ""
    }
}

document.addEventListener('keydown', function (event) {
    const inputTask = document.querySelector('#adderTask')
    const taskList = document.querySelector('#myTasks')
    if (event.key === 'Enter' && inputTask.value.trim() === '')
        return alert('Você precisa escrever algo!'), inputTask.value = ""

    if (event.key === 'Enter')
        return taskList.innerHTML += `<li class="list"><p class ='task' onclick ='check(this)'>${inputTask.value}</p> <button class="commandBtns editBtn" onclick="editTask(this)">Editar</button>
    <button class="commandBtns deleteBtn" onclick="deleteElement(this)">X</button> </li>`, inputTask.value = ""
});


function editTask(element) {
    const taskEdited = window.prompt('Digite o seu novo texto', element.parentElement.firstChild.innerHTML).trim()
    if (taskEdited === '' || taskEdited === null){
        alert('Não é uma alteração válida, tente novamente')
    } else {
        element.parentElement.innerHTML = `<p class ='task' onclick ='check(this)'>${taskEdited}</p>` +
        '<button class="commandBtns editBtn" onclick="editTask(this)">Editar</button><button class="commandBtns deleteBtn" onclick="deleteElement(this)">X</button>'
    }
}

function deleteAll() {
    const taskList = document.querySelector('#myTasks')
    taskList.innerHTML = ""
}

function deleteElement(element) {
    element.parentElement.remove()
}

function check(element) {
    element.classList.toggle('checked')
}
