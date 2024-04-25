

async function pegarMunicipio(){
    var estados = [];
    const urlParams = new URLSearchParams(location.search);
    
    const uf = urlParams.get('uf').toLowerCase();
    document.title = uf;
   
       await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(res =>
             json = res.json()          
                .then(data => {
                    var obj = data
                    for (let i = 0; i < obj.length; i++) {
                        estados[i] = obj[i].nome
                    console.log(estados)
                    
                    
                    
                      }
                      var li = document.querySelector('#municipios');
                    li.textContent = estados;
                    console.log(li);
                        
                    

                }

                )
        )
}

pegarMunicipio();