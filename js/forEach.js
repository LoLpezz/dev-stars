const divTeste = document.getElementById("divTeste")

const endPoint = "https://api.mercadolibre.com/sites/MLB/search?q=notebooks";

fetch(endPoint)
    .then (response => response.json())
    .then(data => {
        const results = data.results.slice(0,12)

        results.forEach(item => {
            const title = item.title;
            const price = item.price;
            const img = item.thumbnail

            console.log(title)
            console.log(price)
            divTeste.innerHTML += `
            <div class="card" style="width: 14rem;">
                <img class="card-img-top px-2" src="${img}" alt="Imagem ilustrativa do produto"/>
                <div class="card-body">
                    <h4 class="card-title title">${title}</h4>
                    <p class="card-text">$${price.toFixed(2)}</p>
                    <button class="btn btn-primary">Comprar</button>
                </div>
            </div>
            `
        });

    })
    .catch(error => console.error('Erro ao retornar os dados:', error))