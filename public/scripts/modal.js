// Definindo a funcionalidade, acoes, da "modal"
export default function Modal() {

    // Guardando a tag que existe com "class=modal-wrapper"
    const modalWrapper = document.querySelector('.modal-wrapper')

    // Guardando o botao que existe com a "class=cancel" que esta dentro da "class=button"
    const cancelButton = document.querySelector('.button.cancel')

    // Adicionando o "aviso de escultar/clickar" e informando a funcao que vai acontecer ao "clicar", que no caso eh "close"
    cancelButton.addEventListener("click", close)

    function open() {
        // Funcionalidade de atribuir a "class=active" para a ".modal-wrapper" que esta no arquivo "room.ejs"
        modalWrapper.classList.add("active")
    }
    function close() {
        // Funcionalidade de remover a "class=active" da ".modal-wrapper" que esta no arquivo "room.ejs"
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
};