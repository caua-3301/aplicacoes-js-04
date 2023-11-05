//Modulo voltado para o uso do local storage
import { atualizarExibicao } from "./index.js";

let minhaLista = [];

//Como a variável será utilizada em outros modulos, aqui vai uma função que a atualiza
const atualizarArray = (novoArray) => {
    minhaLista = novoArray;
    atualizarLocalStorage();
    atualizarExibicao();
}

//Verificando se já existe uma lista no localStorage
const verificarSeExiste = () => {
    if (localStorage.getItem("lista") == undefined) {
        localStorage.setItem("lista", JSON.stringify([]));
    }
}

//Pegando a lista do localStorage
const pegarDoLocalStorage = () => {
    return JSON.parse(localStorage.getItem("lista"))
}

//Atualizando o localStorage
const atualizarLocalStorage = () => {
    localStorage.setItem("lista", JSON.stringify(minhaLista));
}

export { verificarSeExiste, pegarDoLocalStorage, atualizarArray, atualizarLocalStorage, minhaLista }