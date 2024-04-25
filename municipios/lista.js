

async function pegarEstados(){
    var estados = [];

   
       await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/{uf}/municipios`)
        .then(res =>
             json = res.json()
            
                .then(data => {
                    var obj = data
                    for (let i = 0; i < obj.length; i++) {
                        estados[i] = obj[i].nome
                    console.log(estados)
                    
                    
                    
                      }
                      var li = document.querySelector('#Estados');
                    li.textContent = estados;
                    console.log(li);
                        
                    

                }

                )
        )
}

pegarEstados();