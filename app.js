const container = document.getElementById("produtos-container");
const listarBtn = document.getElementById("listar-btn");
const formFiltro = document.getElementById("form-filtro");

const produtos = [
  { nome: "Iphone 15", preco: 4900 , categoria: "Celulares", disponibilidade: true },
  { nome: "Samsung S24 Ultra ", preco: 5390 , categoria: "Celulares", disponibilidade: true },
  { nome: "Xiaomi Redmi Note 14 ", preco: 1400 , categoria: "Celulares", disponibilidade: false },
  { nome: "Notebook Asus GO 15 ", preco: 2699 , categoria: "Computadores", disponibilidade: true },
  { nome: "Notebook Lenovo", preco: 4500, categoria: "Computadores", disponibilidade: true },
  { nome: "Notebook Dell Inspiron ", preco: 2800 , categoria: "Computadores", disponibilidade: false },
  { nome: "Fones de Ouvido JBL", preco: 220 , categoria: "Áudio", disponibilidade: false },
  { nome: "Headset Gamer HyperX", preco: 199, categoria: "Áudio", disponibilidade: true },
  { nome: "Smart TV Samsung QLED", preco: 2600, categoria: "TVs", disponibilidade: true },
  { nome: "Smart TV Philips 4K ", preco: 1899 , categoria: "TVs", disponibilidade: true },
];


function mostrarProdutos(lista) {
  container.innerHTML = "";
  lista.forEach(produto => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <h3>${produto.nome}</h3>
      <p>Preço: R$ ${produto.preco}</p>
      <p>Categoria: ${produto.categoria}</p>
      <p>${produto.disponibilidade ? "Disponível" : "Indisponível"}</p>
    `;
    container.appendChild(div);
  });
}

listarBtn.addEventListener("click", () => {
  mostrarProdutos(produtos);
});

formFiltro.addEventListener("submit", (e) => {
  e.preventDefault();
  const categoria = document.getElementById("categoria-select").value;
  const somenteDisponiveis = document.getElementById("disponivel-checkbox").checked;

  let filtrados = produtos.filter(p => {
    const categoriaOk = categoria === "todas" || p.categoria === categoria;
    const disponibilidadeOk = !somenteDisponiveis || p.disponibilidade;
    return categoriaOk && disponibilidadeOk;
  });

  mostrarProdutos(filtrados);
});