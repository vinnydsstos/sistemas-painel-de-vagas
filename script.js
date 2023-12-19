
  // Função para fazer a requisição HTTP
  function fetchData() {
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1PtKbjTICqlOEbaBWxnzEytYvppqYRx51kB8qFv7HI3M/values/vagas!A1:Z200?majorDimension=ROWS&key=AIzaSyArjp1cRDqO1wXeEP6prDJ0bbYCUS0ys4o')
      .then(response => response.json())
      .then(data => displayData(data.values))
      .catch(error => console.error('Erro ao recuperar os dados:', error));
  }

  // Função para exibir os dados em uma lista clicável
  function displayData(data) {
    const vagasList = document.getElementById('vagasList');

    data.slice(1).forEach(vaga => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img src="${vaga[1]}" alt="Logo" style="max-width: 80px; max-height: 80px; margin-right: 20px;">
          <div>
            <h5>${vaga[2]}</h5>
            <p>${vaga[3]}</p>
            <p>
              <span class="badge badge-primary badge-pill">${vaga[4]}</span>
              <span class="badge badge-warning badge-pill">${vaga[11]}</span>
            </p>
          </div>
        </div>  
      </div>
    `;

      
      listItem.addEventListener('click', function () {
        // Redireciona para a página de detalhes passando o ID da vaga como parâmetro
        window.location.href = `detalhes.html?vagaId=${vaga[0]}`;
      });

      vagasList.appendChild(listItem);
    });
  }

  // Chama a função fetchData ao carregar a página
  window.onload = fetchData;