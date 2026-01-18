const produtos = {
  "7893448921903": { nome: "Contra Filé kg", preco: 44.39, categoria: "carne" },
  "7891000053508": { nome: "Arroz 5kg", preco: 24.90, categoria: "mercearia" },
  "7891991000830": { nome: "Feijão Carioca", preco: 7.50, categoria: "mercearia" },
  "7896004000854": { nome: "Óleo de Soja", preco: 8.99, categoria: "mercearia" },
  "7894321711266": { nome: "Açúcar Refinado", preco: 4.80, categoria: "mercearia" },
  "7891910000197": { nome: "Café Tradicional", preco: 14.90, categoria: "mercearia" },
  "7892840813015": { nome: "Margarina", preco: 6.20, categoria: "mercearia" },
  "7891000100102": { nome: "Farinha de Trigo", preco: 5.30, categoria: "mercearia" },
  "7891515940018": { nome: "Biscoito Recheado", preco: 2.99, categoria: "mercearia" },
  "7891991010853": { nome: "Macarrão", preco: 3.50, categoria: "mercearia" },
  "7896051161904": { nome: "Molho de Tomate", preco: 2.80, categoria: "mercearia" },
  "7891242423032": { nome: "Detergente 500ml", preco: 2.10, categoria: "limpeza" },
  "7890003902538": { nome: "Banana Prata kg", preco: 5.99, categoria: "hortifruti" },
  "7890001236594": { nome: "Maçã Gala kg", preco: 6.49, categoria: "hortifruti" },
  "7890002468357": { nome: "Tomate Italiano kg", preco: 7.90, categoria: "hortifruti" },
  "7890002476936": { nome: "Batata Inglesa kg", preco: 4.20, categoria: "hortifruti" },
  "7890005389059": { nome: "Cebola Branca kg", preco: 3.80, categoria: "hortifruti" },
  "7890004652466": { nome: "Alface Crespa(unidade)", preco: 3.50, categoria: "hortifruti" },
  "7890002418048": { nome: "Cenoura kg", preco: 4.10, categoria: "hortifruti" },
  "7890008387729": { nome: "Beterraba kg", preco: 2.75, categoria: "hortifruti" },
  "7890004390187": { nome: "Batata Doce kg", preco: 2.37, categoria: "hortifruti" },
  "7890002294884": { nome: "Abobrinha Italiana kg", preco: 4.75, categoria: "hortifruti" },
  "7890002490001": { nome: "Chuchu kg", preco: 3.99, categoria: "hortifruti" },
  "7890002104812": { nome: "Pimentão Verde kg", preco: 3.99, categoria: "hortifruti" },
  "7890024903571": { nome: "Alho a Granel kg", preco: 22.90, categoria: "hortifruti" },
  "7890003498178": { nome: "Banana Nanica/Caturra kg", preco: 6.71, categoria: "hortifruti" },
  "7890004900809": { nome: "Maçã Fuji Nacional kg", preco: 14.98, categoria: "hortifruti" },
  "7890002847176": { nome: "Laranja Pera kg", preco: 2.99, categoria: "hortifruti" },
  "7890057287752": { nome: "Mamão Papaya kg", preco: 6.50, categoria: "hortifruti" },
  "7890000925303": { nome: "Melancia kg", preco: 1.99, categoria: "hortifruti" },
  "7890003391857": { nome: "Limão Taiti kg", preco: 3.79, categoria: "hortifruti" },
  "7890002478899": { nome: "Manga Palmer kg", preco: 6.80, categoria: "hortifruti" },
  "7890017427164": { nome: "Abacaxi Pérola(unidade)", preco: 6.91, categoria: "hortifruti" },
  "7890002498198": { nome: "Uva Vitória 500g", preco: 6.12, categoria: "hortifruti" },
  "7890014184732": { nome: "Morango 200g", preco: 9.99, categoria: "hortifruti" },
  "7890002194284": { nome: "Couve Mineira(maço)", preco: 3.99, categoria: "hortifruti" },
  "7890002471826": { nome: "Repolho Verde(unidade)", preco: 3.25, categoria: "hortifruti" },
  "7890304831701": { nome: "Ovos Brancos 30uni", preco: 14.69, categoria: "hortifruti" },
  "7890001284371": { nome: "Ovos Caipira 20uni", preco: 15.59, categoria: "hortifruti" },
  "7897000100001": { nome: "Peito de Frango kg", preco: 18.90, categoria: "carne" },
  "7897001827346": { nome: "Picanha kg", preco: 89.99, categoria: "carne" },
  "7897012472816": { nome: "Acém/Paleta kg", preco: 27.87, categoria: "carne" },
  "7897009127482": { nome: "Coxão Mole/Duro kg", preco: 29.98, categoria: "carne" },
  "7897000128487": { nome: "Filé Mignon kg", preco: 99.99, categoria: "carne" },
  "7897249014722": { nome: "Peito de Frango kg", preco: 21.99, categoria: "carne" },
  "7897002094821": { nome: "Coxinha da Asa kg", preco: 26.76, categoria: "carne" },
  "7897000214821": { nome: "Costelinha Suína kg", preco: 20.91, categoria: "carne" },
  "7897002427418": { nome: "Bisteca de Lombo kg", preco: 21.90, categoria: "carne" },
  "7897000213428": { nome: "Pernil Suíno kg", preco: 31.99, categoria: "carne" },
  "7897000100002": { nome: "Linguiça Toscana kg", preco: 21.50, categoria: "carne" },
  "7898000200001": { nome: "Queijo Mussarela kg", preco: 54.40, categoria: "laticinios" },
  "7898000200002": { nome: "Iogurte Natural 200g", preco: 3.20, categoria: "laticinios" },
  "7891098038356": { nome: "Leite Integral 1L", preco: 4.60, categoria: "laticinios" },
  "7891098589631": { nome: "Leite Zero Lactose 1L", preco: 5.99, categoria: "laticinios" },
  "7899784810214": { nome: "Leite em Pó 400g", preco: 19.87, categoria: "laticinios" },
  "7891000000011": { nome: "Manteiga com Sal 200g", preco: 11.90, categoria: "laticinios" },
  "7891000000012": { nome: "Margarina 500g", preco: 6.80, categoria: "laticinios" },
  "7891000000013": { nome: "Creme de Leite 200g", preco: 3.90, categoria: "laticinios" },
  "7891000000014": { nome: "Leite Condensado 395g", preco: 6.50, categoria: "laticinios" },
  "7891000000015": { nome: "Iogurte Grego", preco: 4.30, categoria: "laticinios" },
  "7891000000016": { nome: "Bebida Láctea Fermentada 6uni", preco: 7.50, categoria: "laticinios" },
  "7891000000017": { nome: "Iogurte Líquido 900g", preco: 13.90, categoria: "laticinios" },
  "7891000000018": { nome: "Queijo Prato Fatiado kg", preco: 62.00, categoria: "laticinios" },
  "7891000000019": { nome: "Queijo Minas Frescal 350g", preco: 15.50, categoria: "laticinios" },
  "7891000000020": { nome: "Queijo Parmesão kg", preco: 98.00, categoria: "laticinios" },
  "7891000000021": { nome: "Queijo Cottage 200g", preco: 12.90, categoria: "laticinios" },
  "7891000000022": { nome: "Requeijão Tradicional 200g", preco: 9.20, categoria: "laticinios" },
  "7891000000023": { nome: "Requeijão Tradicional 400g", preco: 17.90, categoria: "laticinios" },
  "7891000000024": { nome: "Cream Cheese 180g", preco: 13.50, categoria: "laticinios" },
  "7899000300001": { nome: "Desinfetante Lavanda 1L", preco: 6.80, categoria: "limpeza" },
  "7899000300002": { nome: "Esponja de Aço", preco: 2.40, categoria: "limpeza" },
  "7899002847718": { nome: "Sabão em Pó 1.6kg", preco: 22.99, categoria: "limpeza" },
  "7899000294828": { nome: "Sabão Líquido 2L", preco: 26.78, categoria: "limpeza" },
  "7899002498123": { nome: "Amaciante 1L", preco: 13.99, categoria: "limpeza" },
  "7899001287412": { nome: "Água Sanitária 1L", preco: 4.00, categoria: "limpeza" },
  "7899009028621": { nome: "Alvejante sem Cloro 1L", preco: 14.54, categoria: "limpeza" },
  "7899000182381": { nome: "Detergente Neutro 500ml", preco: 2.99, categoria: "limpeza" },
  "7899001248210": { nome: "Esponja de Lava-Louças 4uni", preco: 5.82, categoria: "limpeza" },
  "7899124801920": { nome: "Desengordurante 500ml", preco: 10.99, categoria: "limpeza" },
  "7899029948102": { nome: "Saco de Lixo 30L", preco: 9.99, categoria: "limpeza" },
  "7899001204812": { nome: "Limpador Multiuso 500ml", preco: 6.76, categoria: "limpeza" },
  "7899001294898": { nome: "Álcool 70% 1L", preco: 8.98, categoria: "limpeza" },
  "7899001249810": { nome: "Limpador Perfumado/Pisos 1L", preco: 7.99, categoria: "limpeza" },
  "7899002471267": { nome: "Removedor 500ml", preco: 10.83, categoria: "limpeza" },
  "7899024817282": { nome: "Desinfetante Sanitário Pato", preco: 7.09, categoria: "limpeza" },
  "7899009439993": { nome: "Limpa Vidros 500ml", preco: 11.01, categoria: "limpeza" },
  "7899002492712": { nome: "Pano de Chão(unidade)", preco: 6.00, categoria: "limpeza" },
  "7899012498211": { nome: "Pano de Microfibra(unidade)", preco: 7.89, categoria: "limpeza" },
  "7899000240891": { nome: "Vassoura", preco: 22.85, categoria: "limpeza" },
  "7899000832944": { nome: "Rodo", preco: 17.99, categoria: "limpeza" },
  "7894000400001": { nome: "Pão de Forma", preco: 7.30, categoria: "mercearia" },
  "7894000400002": { nome: "Milho Verde Lata", preco: 3.60, categoria: "mercearia" },
  "7896000600001": { nome: "Sabão em Pó 1kg", preco: 15.40, categoria: "limpeza" },
  "7896000600002": { nome: "Condicionador Capilar 300ml", preco: 15.90, categoria: "higiene" },
  "7896011100199": { nome: "Papel Higiênico 12uni", preco: 12.90, categoria: "higiene" },
  "7891528030143": { nome: "Shampoo", preco: 14.50, categoria: "higiene" },
  "7896090123456": { nome: "Creme Dental", preco: 4.90, categoria: "higiene" },
  "7891025101208": { nome: "Sabonete", preco: 2.20, categoria: "higiene" },
  "7891039851834": { nome: "Desodorante Aerosol 150ml", preco: 14.70, categoria: "higiene" },
  "7891094821649": { nome: "Desodorante Roll-On 50ml", preco: 10.99, categoria: "higiene" },
  "7891022048165": { nome: "Creme Dental 80g", preco: 4.50, categoria: "higiene" },
  "7892983761933": { nome: "Escova de Dente", preco: 7.87, categoria: "higiene" },
  "7891098456721": { nome: "Fio Dental 50m", preco: 12.34, categoria: "higiene" },
  "7891297577501": { nome: "Absorvente 8uni", preco: 6.44, categoria: "higiene" },
  "7899084551542": { nome: "Cotonetes 75uni", preco: 6.12, categoria: "higiene" },
  "7899086107530": { nome: "Aparelho de Barbear 4uni", preco: 12.67, categoria: "higiene" },
  "7899748105419": { nome: "Creme/Espuma de Barbear", preco: 21.99, categoria: "higiene" },
  "7891487573191": { nome: "Hidratante Corporal 200ml", preco: 18.78, categoria: "higiene" },
  "7898132951382": { nome: "Coca Cola Lata 350ml", preco: 2.30, categoria: "bebidas" },
  "7894900011517": { nome: "Refrigerante Cola 2L", preco: 8.50, categoria: "bebidas" },
  "7893000340406": { nome: "Achocolatado", preco: 7.90, categoria: "bebidas" },
  "7898080640016": { nome: "Água Mineral 1,5L", preco: 2.00, categoria: "bebidas" },
  "7894905290627": { nome: "Suco de Caixa", preco: 4.30, categoria: "bebidas" },
  "7895000500001": { nome: "Cerveja Pilsen Lata 350ml", preco: 3.99, categoria: "bebidas" },
  "7895000500002": { nome: "Energético 250ml", preco: 6.50, categoria: "bebidas" },
};

const vlrUnitSpan = document.querySelector("#vlr-unit span");
const totalItemSpan = document.querySelector("#total-item span");

let ultimoProduto = null;
let carrinho = {};
let categoriaAtual = "todos";

const input = document.getElementById("barcode");
const lista = document.getElementById("lista-produtos");
const subtotalEl = document.querySelector(".subtotal strong");
const pesquisa = document.getElementById("pesquisaCatalogo");

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

  input.value = "";
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
