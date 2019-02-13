window.onload = function(e){ 

  
    fetch("https://api.ipify.org/?format=json")
    .then(res => res.json())
    .then(
        (result) => {
            
            fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/ips.json?orderBy=%22ip%22&equalTo="${result.ip}"`)
            .then(res => res.json())
            .then(
                (ret) => {
                    var d = new Date();
                    var data = d.toLocaleDateString("en-US");
                    debugger;
                    var pode = true;
                    if(Object.values(ret).length > 0){
                        var lista = Object.values(ret);
                        for(var i = 0; i<  lista.length;i++){
                            if(lista[i].data == data)
                                pode = false;
                        }
                    }
                    if(pode == true){
                        document.getElementById("status").innerHTML = `<div style='color:green'>${result.ip} pode</div>`;
                        var ips = {
                            ip: result.ip,
                            data:data
                        };
                        fetch(`https://guiadesenvolvedor-78a46.firebaseio.com/ips.json`, {
                            method: "POST",
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(ips)
                        });
                    }else{
                        document.getElementById("status").innerHTML = `<div style='color:red'>${result.ip} não pode</div>`;
                    }
                },
                (err) => {
        
                   console.log('erro')
                }
            );
        },
        (error) => {

           console.log('erro')
        }
    );
}
