import { verificarSeExiste, pegarDoLocalStorage } from "./localStorage.js";
import { adicionarItem, listarItens, removerItem, marcarItem, desmarcarItem } from "./lista.js"

//const CryptoJS = require('crypto-js'); //Usar

//Variáveis da página web 
const nomeProduto = document.querySelector("#nome-do-item");
const precoItem = document.querySelector("#preco-do-item");
const codigoBarras = document.querySelector("#codigo-de-barras");
const saidaDeDados = document.querySelector("#saida-de-dados");

//Form que vai disparar o evento 
const formulario = document.querySelector("#sessao");

//Adicionando um nova lista caso ela não exista no mudo localStorage.js
verificarSeExiste();

//Class responsável por criar meus objetos e adicionálos a lista
class itemDeCompra {
    constructor(nome, preco, codigoBarras, comprado, hash) {
        this.nome = nome,
            this.preco = preco,
            this.codigoBarras = codigoBarras,
            this.comprado = comprado,
            this.hash = hash
    }
}

//Gerando um tipo de "hash", como um identificador
const gerarHash = () => {
    const retirar = "abcdefghijklmnopqrstuvwxyz0123456789";
    let novoHash = "cha";

    for (let caractere in retirar) {
        novoHash += retirar[Math.ceil(Math.random() * (retirar.length - 2 - 0) + 0)]
    }
    return novoHash
}

//Controlando o id para adicinar os eventos de click de form mais segura
const controlarId = (hash) => {
    for (let item in pegarDoLocalStorage()) {
        if (pegarDoLocalStorage()[item].hash == hash) {
            return item;
        }
    }
}

//Gernaod uma nova linha na tabela
const gerarLinha = ({ nome, preco, codigoBarras, hash, comprado }) => {
    const meuHtml = `
        <td class="${comprado ? "comprei" : ""}" >${nome}</td>
        <td class="${comprado ? "comprei" : ""}">R$ ${preco}</td>
        <td class="${comprado ? "comprei" : ""}">${codigoBarras}</td>
        <td><input type="checkbox" name="${hash}" class="mycheck"> <span class="${comprado ? "check" : "no-check"}"></span> </td>
        <td class="remove-bottom">Remover</td>`;

    //Criando nova tag html "tr"
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = meuHtml;

    saidaDeDados.appendChild(novaLinha);
    const disparaEventoRemover = document.querySelectorAll(".remove-bottom")[controlarId(hash)];
    const eventoMarcarDesmarcar = document.querySelectorAll(".mycheck")[controlarId(hash)];

    //Adicionando evento de click a todos os botões de checkbox
    eventoMarcarDesmarcar.addEventListener("click", () => {
        console.log(comprado)
        comprado ? desmarcarItem(hash) : marcarItem(hash);
    })

    //Adicionando evento de click a todos os botões de remoção
    disparaEventoRemover.addEventListener("click", () => {
        removerItem(hash)
    })
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

    adicionarItem(new itemDeCompra(nomeProduto.value, parseInt(precoItem.value), codigoBarras.value, false, gerarHash()))

    //Para fins de experiência do usuário
    nomeProduto.value = "";
    precoItem.value = "";
    codigoBarras.value = "";
    nomeProduto.focus();

    atualizarExibicao();
})

atualizarExibicao();

export { atualizarExibicao }

