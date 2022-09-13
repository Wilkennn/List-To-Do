(() => {
    var list = document.getElementById('list')
    var input = document.querySelector('input')

    input.addEventListener('keyup', (e) => {
        if(e.key ==  "Enter"){
            validateCreateTask(input.value) ? createTask(input) : Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo deu errado!',
                footer: '<p>Dados Inválidos</p>'
            })
        }
    })
})()

function createTask(input){
    let containerTask = document.createElement('div')
    let nameTask = document.createElement('p')
    const removeButton = document.createElement('img')
 
    removeButton.setAttribute('class','remove')
    containerTask.setAttribute('class', 'box')
    removeButton.setAttribute('src', '../IMG/remove-button.png')
    nameTask.textContent = input.value

    removeButton.addEventListener("click", () => {
        const div = removeButton.parentNode
        div.remove()

        Swal.fire(
            'Parabéns!!',
            'Task Finalizada com Sucesso!',
            'success'
        )
    })

    containerTask.append(nameTask)
    containerTask.append(removeButton)

    list.append(containerTask)

    input.value = ""
}

function validateCreateTask(string){
    const isLengthValid = string.length > 0 ? true : false
    return isLengthValid
}