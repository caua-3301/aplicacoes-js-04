import {atualizarArray, pegarDoLocalStorage} from "./localStorage.js";
import { atualizarExibicao } from "./index.js";

//Operações que seão realizadas no que diz respeito as listas
const adicionarItem = (novoItem) => {
    const novoArray = [...pegarDoLocalStorage(), novoItem];
    atualizarArray(novoArray);
}

//Rmovendo item da lsita
const removerItem = (hash) => {
    const novoArray = pegarDoLocalStorage().filter((objeto) => objeto.hash !== hash);
    console.log(novoArray)
    atualizarArray(novoArray);
    atualizarExibicao();
}

//Marcando um item de compra
const marcarItem = (hash) => {
    const items = pegarDoLocalStorage();

    items.forEach((item) => {
      if (item.hash === hash) {
        item.comprado = true;
      }
    });
  
    atualizarArray(items);
}

//Desmarcando um item de compra
const desmarcarItem = (hash) => {
    const items = pegarDoLocalStorage();

    items.forEach((item) => {
      if (item.hash === hash) {
        item.comprado = false;
      }
    });
  
    atualizarArray(items);
}

const listarItens = () => {
    return pegarDoLocalStorage();
}

export {adicionarItem, listarItens, removerItem, marcarItem, desmarcarItem}
