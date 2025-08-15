let dicionario = [];

async function carregarDicionario() {
  const resp = await fetch('dicionario_cinfaes.json');
  dicionario = await resp.json();
}

function pesquisar(termo) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  if (!termo) return;

  const resultados = dicionario.filter(item =>
    item.Palavra.toLowerCase().includes(termo.toLowerCase())
  );

  resultados.forEach(item => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `<h2>${item.Palavra}</h2><p>${item.Significado}</p>`;
    resultsDiv.appendChild(div);
  });
}

document.getElementById('search').addEventListener('input', (e) => {
  pesquisar(e.target.value);
});

carregarDicionario();