import { minhaLista, atualizarArray, pegarDoLocalStorage} from "./localStorage.js";

//Operações que seão realizadas no que diz respeito as listas
const adicionarItem = (novoItem) => {
    const novoArray = [...pegarDoLocalStorage(), novoItem];
    atualizarArray(novoArray);
}

const removerItem = ({nome}) => {
    console.log("jdhbvfdkfmhdglf")
    const novoArray = pegarDoLocalStorage().filter(item => item.codigoBarras != codigoBarras);
    atualizarArray(novoArray);
}

const marcarItem = (item) => {
    const novoArray = pegarDoLocalStorage().map((itens) => {
        if (itens = item ){
            itens.comprado == true;
        }
    })

    atualizarArray(novoArray);
}

const desmarcarItem = (item) => {
    const novoArray = pegarDoLocalStorage().map((itens) => {
        if (itens = item ){
            itens.comprado == false;
        }
    })

    atualizarArray(novoArray);
}

const listarItens = () => {
    return pegarDoLocalStorage();
}

export {adicionarItem, listarItens, removerItem}
