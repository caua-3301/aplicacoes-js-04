import { verificarSeExiste, minhaLista } from "./localStorage.js";
import { adicionarItem, listarItens, removerItem} from "./lista.js"

//Variáveis da página web 
const nomeProduto = document.querySelector("#nome-do-item");
const precoItem = document.querySelector("#preco-do-item");
const codigoBarras = document.querySelector("#codigo-de-barras"); 
const saidaDeDados = document.querySelector("#saida-de-dados");

//Adicionando um nova lista caso ela não exista no mudo localStorage.js
verificarSeExiste();

//Form que vai disparar o evento 
const formulario = document.querySelector("#sessao");


//Class responsável por criar meus objetos e adicionálos a lista
class itemDeCompra {
    constructor (nome, preco, codigoBarras, comprado) {
        this.nome = nome,
        this.preco = preco,
        this.codigoBarras = codigoBarras,
        this.comprado = comprado
    }
}

const gerarLinha = ({nome, preco, codigoBarras}) => {
    const meuHtml = `
        <td>${nome}</td>
        <td>R$ ${preco}</td>
        <td>${codigoBarras}</td>
        <td class="mycheck"><input type="checkbox"></td>
        <td class="remove-bottom" >Remover</td>`;

    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = meuHtml;

    saidaDeDados.appendChild(novaLinha);
    const disparaEvento = document.querySelectorAll(".remove-bottom");

}

const atualizarExibicao = () => {
    //textContent != innerHtml
    saidaDeDados.textContent = "";
    for (let item of listarItens()) {
        gerarLinha(item)
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    adicionarItem(new itemDeCompra(nomeProduto.value, parseInt(precoItem.value), codigoBarras.value, false))
    atualizarExibicao();
})
atualizarExibicao();

