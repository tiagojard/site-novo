function datediff(inicio, fim) {
    return Math.round((fim-inicio)/(1000*60*60*24));
}

window.onload = function(e){ 
    fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(
        (result) => {
            
            fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/ips.json?orderBy=%22ip%22&equalTo=%22${result.ip}%22`)
            .then(res => res.json())
            .then(
                (ret) => {
                    try {
                    var d = new Date();
                    var data = d.toLocaleDateString("en-US");
                    debugger;
                    var pode = true;
                    try {
                    if(Object.values(ret).length > 0){
                        var lista = Object.values(ret);
                        for(var i = 0; i<  lista.length;i++){
                            debugger;
                            var dt = new Date(lista[i].data.split('/')[2], lista[i].data.split('/')[0]-1,lista[i].data.split('/')[1]);
                            if(datediff(dt,d) <= 2)
                                pode = false;
                        }
                    }
                }catch{
                    pode = false;
                    document.getElementById("status").innerHTML = `<div style='color:red'>erro api</div>`;
                }
                    if(pode == true){
                        document.getElementById("status").innerHTML = `<div style='color:green'> pode</div>`;
                        var ips = {
                            ip: result.ip,
                            data:data
                        };
                        try {
                            fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/ips.json`, {
                                method: "POST",
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(ips)
                            });
                        }catch{
                            document.getElementById("status").innerHTML = `<div style='color:red'>erro salvar</div>`;
                        }
                        
                    }else{
                        document.getElementById("status").innerHTML = `<div style='color:red'> não pode</div>`;
                    }
                }catch{
                    document.getElementById("status").innerHTML = `<div style='color:red'>erro dentro</div>`;
                }
                },
                (err) => {
        
                    document.getElementById("status").innerHTML = `<div style='color:red'>erro busca banco</div><a href="https://guiadesenvolvedor-78a46.firebaseio.com/ips.json?orderBy=%22ip%22&equalTo=%22${result.ip}%22">não clique ${result.ip}</a>`;
                }
            );
        },
        (error) => {

            document.getElementById("status").innerHTML = `<div style='color:red'>erro api</div>`;
        }
    );
}
