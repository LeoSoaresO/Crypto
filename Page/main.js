var apikey = {
    key: 'd6088df0-b0c2-40de-aa45-33b0cc464b1b'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
        return response.json();
})
.then((api) => {
    
    var content = "";

    for(let i = 0; i < 20; i++){
       content = content + `
      
        <div class="media col-md-4 padding-col">
            <img src="./coin.jpg" class="align-self-center mr-4 mt-4 img" alt="coin" width="200" height="120">
            <div class="media-body mt-4 mr-1">
            <h5 class="mt-2">${api.data[i].name}</h5>
            <p>SIGLA: ${api.data[i].symbol}</p>
            <p>ID: ${api.data[i].id}</p>
            </div>
        </div>
   
        `;

        document.getElementById("coins").innerHTML = content;        
    }
})
.catch((error) => {
    console.error(error.message);
});