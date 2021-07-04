// Importando a "modal.js"
import Modal from './modal.js';

const modal = Modal();
// Guardando a tag <h2> que esta dentro da "class=modal"
const modalTitle = document.querySelector('.modal h2');
// Guardando a tag <p> que esta dentro da "class=modal"
const modalDescription = document.querySelector('.modal p');
// Guardando a tag <button> que esta dentro da "class=modal"
const modalButton = document.querySelector('.modal button');

// Guardando todas as tag que existe com a "class=check" que esta na tag <a> dentro da "class=actions"
const checkButtons = document.querySelectorAll(".actions a.check")

// Passando com ".forEach" tag a tag que tem a "class=check" para colocar o ""aviso de escultar/clicar"
checkButtons.forEach(button => {
    // Adicionando o "aviso de escultar/clickar" e adicionando a funcao handleClick ao cliquar
    button.addEventListener("click", handleClick)
});

// Guardando todas as tag que existe com a "class=delete" que esta na tag <a> dentro da "class=actions"
const deleteButtons = document.querySelectorAll(".actions a.delete")

// Passando com ".forEach" tag a tag que tem a "class=delete" para colocar o "aviso de escultar/clicar"
deleteButtons.forEach(button => {
    // Adicionando o "aviso de escultar/clickar" e adicionando a funcao handleClick ao cliquar
    button.addEventListener("click", (event) => handleClick(event, false))
});

function handleClick(event, check = true) {

    // Esta avisando para o JS com o "event" que os <a>/link nao se comportam mais como tal
    event.preventDefault()

    // Verificando se o "check" eh (1 opcao)true (:)or (2 opcao)false e guardando o text
    const text = check ? "Marcar como lida" : "Excluir"
    // Verificando se o "check" eh (1 opcao)true (:)or (2 opcao)false
    const slug = check ? "check" : "delete"

    // Guardando a informao guardada pelo tag "data-id" que esta com o "id="room-id"
    const roomId = document.querySelector("#room-id").dataset.id

    // "event" tras consigo o elemento que ocorreu o evento (ex.: todas as tag, class id etc)
    // "target" eh elemento que ocorreu o evento
    // E neste caso ele esta guardando os elementos "data-id" que informando nos check/delete
    const questionId = event.target.dataset.id

    // Guardando a tag <form> que esta dentro da "class=modal"
    const form = document.querySelector(".modal form")
    // Estamos mudando o atributo "action" pela URL que o POST vai
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    // Adicionando o "text" mais adicional no <h2> em HTML
    modalTitle.innerHTML = `${text} esta pergunta`
    // Adicionando o "text" mais adicional no <p> em HTML
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} `
    // Verificando se o "check" eh true or false para remover "class="red"" (:)ou add
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    // Abrir a modal
    modal.open()
};