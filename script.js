const produtos = {
  "7898132951382": { nome: "Coca Cola Lata 350ml", preco: 2.30, categoria: "bebidas" },
  "7893448921903": { nome: "Contra Filé", preco: 44.39, categoria: "carne" },
  "7891000053508": { nome: "Arroz 5kg", preco: 24.90, categoria: "mercearia" },
  "7891991000830": { nome: "Feijão Carioca", preco: 7.50, categoria: "mercearia" },
  "7896004000854": { nome: "Óleo de Soja", preco: 8.99, categoria: "mercearia" },
  "7894321711266": { nome: "Açúcar Refinado", preco: 4.80, categoria: "mercearia" },
  "7891910000197": { nome: "Café Tradicional", preco: 14.90, categoria: "mercearia" },
  "7891098038356": { nome: "Leite Integral", preco: 4.50, categoria: "laticinios" },
  "7892840813015": { nome: "Margarina", preco: 6.20, categoria: "mercearia" },
  "7891000100102": { nome: "Farinha de Trigo", preco: 5.30, categoria: "mercearia" },
  "7891515940018": { nome: "Biscoito Recheado", preco: 2.99, categoria: "mercearia" },
  "7894900011517": { nome: "Refrigerante Cola 2L", preco: 8.50, categoria: "bebidas" },
  "7891991010853": { nome: "Macarrão", preco: 3.50, categoria: "mercearia" },
  "7896051161904": { nome: "Molho de Tomate", preco: 2.80, categoria: "mercearia" },
  "7893000340406": { nome: "Achocolatado", preco: 7.90, categoria: "bebidas" },
  "7891025101208": { nome: "Sabonete", preco: 2.20, categoria: "higiene" },
  "7891242423032": { nome: "Detergente", preco: 2.10, categoria: "limpeza" },
  "7896011100199": { nome: "Papel Higiênico", preco: 12.90, categoria: "higiene" },
  "7891528030143": { nome: "Shampoo", preco: 14.50, categoria: "higiene" },
  "7896090123456": { nome: "Creme Dental", preco: 4.90, categoria: "higiene" },
  "7898080640016": { nome: "Água Mineral 1,5L", preco: 2.00, categoria: "bebidas" },
  "7894900700015": { nome: "Suco de Caixa", preco: 4.30, categoria: "bebidas" },
  "7890001112223": { nome: "Banana Prata kg", preco: 5.99, categoria: "hortifruti" },
  "7890001112224": { nome: "Maçã Gala kg", preco: 6.49, categoria: "hortifruti" },
  "7890001112225": { nome: "Tomate Italiano kg", preco: 7.90, categoria: "hortifruti" },
  "7890001112226": { nome: "Batata Inglesa kg", preco: 4.20, categoria: "hortifruti" },
  "7890001112227": { nome: "Cebola Branca kg", preco: 3.80, categoria: "hortifruti" },
  "7890001112228": { nome: "Alface Crespa", preco: 3.50, categoria: "hortifruti" },
  "7890001112229": { nome: "Cenoura kg", preco: 4.10, categoria: "hortifruti" },
  "7897000100001": { nome: "Peito de Frango kg", preco: 18.90, categoria: "carne" },
  "7897000100002": { nome: "Linguiça Toscana kg", preco: 21.50, categoria: "carne" },
  "7898000200001": { nome: "Queijo Mussarela 200g", preco: 9.90, categoria: "laticinios" },
  "7898000200002": { nome: "Iogurte Natural", preco: 3.20, categoria: "laticinios" },
  "7899000300001": { nome: "Desinfetante Lavanda", preco: 6.80, categoria: "limpeza" },
  "7899000300002": { nome: "Esponja de Aço", preco: 2.40, categoria: "limpeza" },
  "7894000400001": { nome: "Pão de Forma", preco: 7.30, categoria: "mercearia" },
  "7894000400002": { nome: "Milho Verde Lata", preco: 3.60, categoria: "mercearia" },
  "7895000500001": { nome: "Cerveja Pilsen Lata 350ml", preco: 3.99, categoria: "bebidas" },
  "7895000500002": { nome: "Energético 250ml", preco: 6.50, categoria: "bebidas" },
  "7896000600001": { nome: "Sabão em Pó 1kg", preco: 12.40, categoria: "limpeza" },
  "7896000600002": { nome: "Condicionador Capilar", preco: 15.90, categoria: "higiene" },
};

const vlrUnitSpan = document.querySelector("#vlr-unit span");
const totalItemSpan = document.querySelector("#total-item span");

let ultimoProduto = null;
let carrinho = {};
let categoriaAtual = "todos";

const input = document.getElementById("barcode");
const lista = document.getElementById("lista-produtos");
const subtotalEl = document.querySelector(".subtotal strong");

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    adicionar(input.value.trim());
    input.value = "";
  }
});

function adicionar(codigo) {
  if (!produtos[codigo]) {
    alert("Produto não cadastrado");
    return;
  }

  if (!carrinho[codigo]) {
    carrinho[codigo] = { ...produtos[codigo], codigo, qtd: 1 };
  } else {
    carrinho[codigo].qtd++;
  }

  ultimoProduto = carrinho[codigo];

  atualizarDestaques();
  atualizar();
}

function alterarQtd(codigo, delta) {
  carrinho[codigo].qtd += delta;

  if (carrinho[codigo].qtd <= 0) {
    delete carrinho[codigo];
    ultimoProduto = null;
  } else {
    ultimoProduto = carrinho[codigo];
  }

  atualizarDestaques();
  atualizar();
}

function atualizar() {
  lista.innerHTML = "";
  let subtotal = 0;
  let i = 1;

  Object.values(carrinho).forEach(p => {
    const totalItem = p.qtd * p.preco;
    subtotal += totalItem;

    lista.innerHTML += `
      <tr>
        <td>${i++}</td>
        <td>${p.codigo}</td>
        <td>${p.nome}</td>
        <td>
          <button class="qtd-btn" onclick="alterarQtd('${p.codigo}', -1)">-</button>
          ${p.qtd}
          <button class="qtd-btn" onclick="alterarQtd('${p.codigo}', 1)">+</button>
        </td>
        <td>${p.preco.toFixed(2)}</td>
        <td>${totalItem.toFixed(2)}</td>
      </tr>
    `;
  });

  subtotalEl.textContent = subtotal.toFixed(2);
}

function atualizarDestaques() {
  if (!ultimoProduto) {
    vlrUnitSpan.textContent = "R$ 0,00";
    totalItemSpan.textContent = "R$ 0,00";
    return;
  }

  const unit = ultimoProduto.preco;
  const total = ultimoProduto.preco * ultimoProduto.qtd;

  vlrUnitSpan.textContent = `R$ ${unit.toFixed(2)}`;
  totalItemSpan.textContent = `R$ ${total.toFixed(2)}`;
}

const inputPago = document.getElementById("valorPago");
const trocoEl = document.getElementById("troco");

inputPago.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    if (inputPago.value === "" || inputPago.value < 0) {
      inputPago.value = "";
      alert("Valor de pagamento inválido");
    } else {
      calcularTroco();
    }
  }
});

function calcularTroco() {
  const total = Number(subtotalEl.textContent);
  const pago = Number(inputPago.value.replace(",", "."));

  if (isNaN(pago)) return;

  if (pago < total) {
    trocoEl.textContent = `Faltam R$ ${(total - pago).toFixed(2)}`;
  } else {
    trocoEl.textContent = `R$ ${(pago - total).toFixed(2)}`;

    atualizar();
  }
}

const inputCPF = document.getElementById("cpf");

inputCPF.addEventListener("input", () => {
  let v = inputCPF.value.replace(/\D/g, ""); // só números
  v = v.slice(0, 11); // máximo 11 dígitos

  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  inputCPF.value = v;
});

function gerarNota(cpf) {
  const nota = document.getElementById("notaFiscal");
  const notaCpf = document.getElementById("notaCpf");
  const notaItens = document.getElementById("notaItens");

  const total = Number(subtotalEl.textContent);
  const pago = Number(inputPago.value.replace(",", "."));
  const troco = pago - total;

  notaCpf.textContent = cpf
    ? `CPF: ${cpf}`
    : "CPF não informado";

  notaItens.innerHTML = "";

  Object.values(carrinho).forEach(p => {
    notaItens.innerHTML += `
      <p>${p.nome} (${p.qtd}x) - R$ ${(p.qtd * p.preco).toFixed(2)}</p>
    `;
  });

  document.getElementById("notaTotal").textContent = `R$ ${total.toFixed(2)}`;
  document.getElementById("notaPago").textContent = `R$ ${pago.toFixed(2)}`;
  document.getElementById("notaTroco").textContent = `R$ ${troco.toFixed(2)}`;

  nota.classList.remove("hidden");
}

function fecharNota() {
  document.getElementById("notaFiscal").classList.add("hidden");
  resetarVenda();
}

function cpfValidoOuVazio(cpfFormatado) {
  const apenasNumeros = cpfFormatado.replace(/\D/g, "");

  if (apenasNumeros.length === 0) return true; // vazio pode
  if (apenasNumeros.length === 11) return true; // completo

  return false;
}

function finalizarVenda() {
  calcularTroco();
  if (trocoEl.textContent.startsWith("Faltam") || trocoEl.textContent === "R$ 0.00") {
    alert("Pagamento incompleto!")
  } else {
    if (Object.keys(carrinho).length === 0) {
      alert("Nenhum item no carrinho");
      return;
    }

    const cpfInput = document.getElementById("cpf").value.trim();

    // valida CPF
    if (!cpfValidoOuVazio(cpfInput)) {
      alert("CPF incompleto! Preencha os 11 dígitos ou deixe em branco.");
      return;
    }

    const desejaNota = confirm("Deseja emitir nota fiscal?");

    if (!desejaNota) {
      resetarVenda();
      return;
    }

    gerarNota(cpfInput);
  }
}

function cancelarVenda() {
  if (Object.keys(carrinho).length > 0) {
    const confirma = confirm("Tem certeza que deseja cancelar a venda?");
    if (confirma) {
      resetarVenda();
    }
  }
}

function resetarVenda() {
  carrinho = {};
  ultimoProduto = null;
  categoriaAtual = "todos";

  inputPago.value = "";
  document.getElementById("cpf").value = "";
  trocoEl.textContent = "R$ 0,00";

  atualizarDestaques();
  atualizar();
  carregarCatalogo();
}

const btnFinalizar = document.getElementById("finalizarVenda");
const btnCancelar = document.getElementById("cancelarVenda");
btnCancelar.addEventListener("click", cancelarVenda)
btnFinalizar.addEventListener("click", finalizarVenda);

const listaCatalogo = document.getElementById("lista-catalogo");
const btnFiltro = document.getElementById("btnFiltro");
const menuFiltro = document.getElementById("menuFiltro");

function carregarCatalogo() {
  listaCatalogo.innerHTML = "";
  const texto = pesquisa.value.toLowerCase().trim();

  Object.entries(produtos).forEach(([codigo, p]) => {
    if (categoriaAtual !== "todos" && p.categoria !== categoriaAtual) return;

    const conteudo = `${codigo} ${p.nome}`.toLowerCase();
    if (!conteudo.includes(texto)) return;

    listaCatalogo.innerHTML += `
      <tr>
        <td>${codigo}</td>
        <td>${p.nome}</td>
        <td>R$ ${p.preco.toFixed(2)}</td>
      </tr>
    `;
  });

  btnFiltro.textContent =
    categoriaAtual.charAt(0).toUpperCase() + categoriaAtual.slice(1) + " ▾";
}

const pesquisa = document.getElementById("pesquisaCatalogo");

pesquisa.addEventListener("input", () => {
  const texto = pesquisa.value.toLowerCase();
  const linhas = document.querySelectorAll("#lista-catalogo tr");

  linhas.forEach(linha => {
    const conteudo = linha.innerText.toLowerCase();
    linha.style.display = conteudo.includes(texto) ? "" : "none";
  });
  carregarCatalogo();
});

pesquisa.addEventListener("focus", () => {
  if (!menuFiltro.classList.contains("hidden")) {
    menuFiltro.classList.add("hidden");
  }
});

document.addEventListener("click", (e) => {
  if (!menuFiltro.contains(e.target) && !btnFiltro.contains(e.target)) {
    menuFiltro.classList.add("hidden");
  }
});

btnFiltro.addEventListener("click", () => {
  menuFiltro.classList.toggle("hidden");
  btnFiltro.textContent = "Filtrar ▾";
});

menuFiltro.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  categoriaAtual = e.target.dataset.cat;
  menuFiltro.classList.add("hidden");
  carregarCatalogo();
});

listaCatalogo.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;

  const codigo = row.children[0].innerText;

  input.value = codigo;
  input.focus();

  row.classList.add("copiado");
  setTimeout(() => row.classList.remove("copiado"), 500);
});

carregarCatalogo();
