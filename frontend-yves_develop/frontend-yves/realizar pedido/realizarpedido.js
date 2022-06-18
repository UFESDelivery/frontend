$(document).ready(function(){

    function usuarioNome(){

        let jsonProdutos = fazerGet("http://127.0.0.1:5000/user/get/client/" + 2)
        let arrayCliente = trataObjeto(jsonProdutos)
            
        let jsonPedido = arrayCliente[1].cd_usuario
            
        let req = new XMLHttpRequest();
            
        req.open('GET', 'http://127.0.0.1:5000/user/get/client/' + jsonPedido, true);
            
        req.setRequestHeader("Content-Type", "text/html");
        req.send();
            
        req.onreadystatechange = function(){
            if (req.readyState == 4 && req.status == 200) {
                document.getElementById("nomeUsuario").innerHTML = JSON.parse(req.responseText).result.no_usuario;
            }
        }
        return arrayCliente[1].cd_usuario;
    }

    function trataObjeto(jsonProdutos){
        let arrayProdutos = JSON.parse(jsonProdutos) // transformando em objeto
        let array = Object.keys(arrayProdutos).map(function(key) { // transforma o objeto em array
            return arrayProdutos[key]
        })
        return array;
    }

    function fazerGet(url){
        let request = new XMLHttpRequest()
        request.open("get", url, false)
        request.send()
        return request.responseText;
    }

    if(usuarioNome() != 0 || usuarioNome() != NaN){
        let vlTotalCDesc, vlTotalSDesc, somaTotal = 0, qtdProdutos, descontos = {}, descontosSomados = 0;

        descontos = {
            "id":"1",
            "tp_desconto":"Desconto para todo pedido acima de 20,00 R$",
            "vl_desconto":"5",
            "qtd_usos":"0",
            "qtd_max_usos":"30"
        }

        function modelaMes(mes){
            if(mes == 0){
                mes = "Janeiro"
            }else if(mes == 1){
                mes = "Fevereiro"
            }else if(mes == 2){
                mes = "Março"
            }else if(mes == 3){
                mes = "Abril"
            }else if(mes == 4){
                mes = "Maio"
            }else if(mes == 5){
                mes = "Junho"
            }else if(mes == 6){
                mes = "Julho"
            }else if(mes == 7){
                mes = "Agosto"
            }else if(mes == 8){
                mes = "Setembro"
            }else if(mes == 9){
                mes = "Outubro"
            }else if(mes == 10){
                mes = "Novembro"
            }else if(mes == 11){
                mes = "Dezembro"
            }
            return mes;
        }

        function dataEHora(){
            let data = new Date();
            let insereHorario = document.getElementById("dataEHora");
            let horario = data.getDay() + " " + insereZeroNoHora(data.getHours())+ data.getHours() +":"+ insereZeroNoMinuto(data.getMinutes())+data.getMinutes();
            $(insereHorario).html(data.getDate() +" "+ modelaMes(data.getMonth()) +" "+ insereZeroNoHora(data.getHours())+ data.getHours() +":"+ insereZeroNoMinuto(data.getMinutes())+data.getMinutes());
            return horario;
        }setInterval(dataEHora, 1000)

        function insereZeroNoMinuto(minutos){
            let min = "";
            if(minutos < 10){
                min = "0"
            }
            return min;
        }

        function insereZeroNoHora(hora){
            let h = "";
            if(hora < 10){
                h = "0"
            }
            return h;
        }

        function mostrarProdutos(){
            let tratamentoPersonalizado = false;

            let request = new XMLHttpRequest()
            request.open("get", "http://127.0.0.1:5000/product/get/all", false)
            request.send()

            let verificaHorarioFunc = dataEHora()
            let hora = verificaHorarioFunc.slice(2, 4)
            let dia = verificaHorarioFunc.slice(0, 2)
            if(request.readyState != 4){

            }else if (request.readyState == 4 && request.status == 200) { // && trataObjeto(request.responseText)[1].length != 0 && parseInt(dia) != 1 && (parseInt(hora) >= 15 && parseInt(hora) != 0)
                let jsonProdutos = request.responseText
                $(document.getElementsByClassName("container-bottom")).addClass("d-flex");
                array = trataObjeto(jsonProdutos)
                qtdProdutos = array[1].length

                // percorre o array dos produtos
                for(i = 0; i < array[1].length; i++){
                    
                    let j = 0, td = [], vlTotal = array[1][i].vl_unitario, tr = [];
                    tr[i] = document.createElement("TR") // cria linha da tabela

                    while(j != 6){
                        td[j] = document.createElement("Td") // 6 colunas da tabela para cada linha
                        j++
                    }

                    $(td[0]).html(array[1][i].no_produto); // nomes dos produtos

                    $(td[1]).append('<span id="menos'+ i.toString()+'"><img src="imagens/minus-solid.svg" class="icons p-1 mr-2"></span><span id="valor'+i.toString()+'" value="'+ 1 +'">1</span><span id="mais'+i.toString()+'"><img src="imagens/plus-solid.svg" class="icons p-1 ml-2"></span>')
                    //$(".tr").append($(td[1]).html()); // forma de inserir 
                    
                    if(array[1][i].cd_categoria == 1){
                        $(td[2]).html("Vitaminas");
                    }else if(array[1][i].cd_categoria == 2){
                        $(td[2]).html("Sucos");
                    }else if(array[1][i].cd_categoria == 3){
                        $(td[2]).html("Bebidas");
                    }else if(array[1][i].cd_categoria == 4){
                        $(td[2]).html("Mistos");
                    }else if(array[1][i].cd_categoria == 5){
                        $(td[2]).html("Porções");
                    }else if(array[1][i].cd_categoria == 6){
                        $(td[2]).html("Lanches Gourmet");
                    }
                    
                    $(td[3]).html(array[1][i].vl_unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
                    $(td[3]).attr("id", "vlUnitario" + i);

                    $(td[4]).html(vlTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); 
                    $(td[4]).attr("id", "vlTotal" + i);

                    $(td[5]).append('<img id="sacola'+i.toString()+'" src="imagens/plus-solid.svg" value="'+ 1 +'" class="icons-sacola" data-toggle="modal">')

                    $(tr[i]).append(td[0]) // insere coluna como filho da linha
                    $(tr[i]).append(td[1])
                    $(tr[i]).append(td[2])
                    $(tr[i]).append(td[3])
                    $(tr[i]).append(td[4])
                    $(tr[i]).append(td[5])

                    $("#produtosTbody").prepend(tr[i]) // insere linhas como filhos do corpo da tabela
                    document.getElementById("tipoDesconto").innerHTML = descontos.tp_desconto;
                    document.getElementById("desconto").innerHTML = descontos.vl_desconto +"%";
                    // document.getElementById("menos"+i).addEventListener("click", diminuirQtdDoPedido())
                    // document.getElementById("mais"+i).addEventListener("click", aumentarQtdDoPedido())

                } 
            }else if(parseInt(dia) == 1 || (parseInt(hora) < 15)){
                $(document.getElementById("nFunHorarioEDia")).css("display", "block");
            }else if(request.readyState == 4 && request.status == 200 && trataObjeto(request.responseText)[1].length != 0){
                $(document.getElementById("qtdZerada")).css("display", "block");
            }else if(tratamentoPersonalizado){
                $(document.getElementById("nFunPersonalizado")).css("display", "block");
            }else {
                if(request.readyState == 4 && request.status != 200){
                    $(document.getElementById("erroAoCarregarProdutos")).css("display", "block");
                }else {
                    $(document.getElementById("carregandoProdutos")).css("display", "block");
                }
            }
        }mostrarProdutos()

        for(let i = 0; i < qtdProdutos; i++){ // como não estava funcionando a criação de actions dentro da função mostrar produtos, criei por fora
            document.getElementById("menos" + i.toString()).onclick = function(){diminuirQtdDoPedido(i)};
            document.getElementById("mais" + i.toString()).onclick = function(){aumentarQtdDoPedido(i)};
            document.getElementById("sacola" + i.toString()).onclick = function(){getQtdItens(i)};
        }

        function diminuirQtdDoPedido(i){ // lógica para o button -
            let va = document.getElementById("valor"+i)
            if(parseInt($(va).html()) > 1){
                $(va).html(parseInt($(va).html())- 1) // diminui e exibe 
                // lógica de soma e exibição de acordo com a quantidade modificada
                let vlTotal = document.getElementById("vlTotal"+i).innerHTML.slice(8).replace(",", ".")
                let vlUnitario = document.getElementById("vlUnitario"+i).innerHTML.slice(8).replace(",", ".")
                let vlTotalAtt = parseFloat(vlTotal) - parseFloat(vlUnitario);
                $(document.getElementById("vlTotal"+i)).html(vlTotalAtt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            }
        }

        function aumentarQtdDoPedido(i){ // lógica para o button +
            let va = document.getElementById("valor"+i)
            if(parseInt($(va).html()) < 100){
                $(va).html(parseInt($(va).html())+ 1) // diminui e exibe 
                // lógica de soma e exibição de acordo com a quantidade modificada
                let vlTotal = document.getElementById("vlTotal"+i).innerHTML.slice(8).replace(",", ".")
                let vlUnitario = document.getElementById("vlUnitario"+i).innerHTML.slice(8).replace(",", ".")
                let vlTotalAtt = parseFloat(vlTotal) + parseFloat(vlUnitario);
                $(document.getElementById("vlTotal"+i)).html(vlTotalAtt.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))
            }
            
        }

        function getQtdItens(i){ // action do button "Adicionar" que recupera a quantidade de itens do item clicado
            
            let request = new XMLHttpRequest()
            request.open("get","http://127.0.0.1:5000/product/get/"+ (i+1), false)
            request.send()

            let array = trataObjeto(request.responseText) // transformando o objeto em array
            
            // buscando a quantidade do produto dentro do array e comparando com o selecionado
            if(parseInt(document.getElementById("valor" + i).innerHTML)  <= array[1].qt_estoque){
                // Aqui irá a lógica para exibir o modal de sucesso e inserir o item em pagamentos (sacola)
                adicionarNaSacola(array, i)
                let selecionaSacola = document.getElementById("sacola"+i)
                $(selecionaSacola).attr("data-target", "#adicionadocomsucesso")
            }else{
                // Aqui irá a lógica para exibir o modal de erro
                document.getElementById("qtdEstoqueModal").innerHTML = array[1].qt_estoque;
                let selecionaSacola = document.getElementById("sacola"+i)
                $(selecionaSacola).attr("data-target", "#naoadicionado")
            }
        }

        function adicionarNaSacola(array, i){
            // adicionando produtos à sacola em "pagar"
            console.log(array, i)
            let tr, td = [], j = 0;
            tr = document.createElement("TR")
            while(j != 5){
                td[j] = document.createElement("TD") // 6 colunas da tabela para cada linha
                j++
            }
            $(td[0]).html(array[1].no_produto);

            $(td[1]).html(document.getElementById("valor" +i).innerHTML)

            if(array[1].cd_categoria == 1){
                $(td[2]).html("Vitamina");
            }else if(array[1].cd_categoria == 2){
                $(td[2]).html("Suco");
            }else if(array[1].cd_categoria == 3){
                $(td[2]).html("Bebida");
            }else if(array[1].cd_categoria == 4){
                $(td[2]).html("Sanduíche");
            }else if(array[1].cd_categoria == 5){
                $(td[2]).html("Porção");
            }else if(array[1].cd_categoria == 6){
                $(td[2]).html("Hambúrguer");
            }

            $(td[3]).html(array[1].vl_unitario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
            $(td[3]).attr("id", "vlUnitarioSacola" + i);

            $(td[4]).html(document.getElementById("vlTotal" + i).innerHTML); 
            $(td[4]).attr("id", "vlTotalSacola" + i);

            $(tr).append(td[0]) // insere coluna como filho da linha
            $(tr).append(td[1])
            $(tr).append(td[2])
            $(tr).append(td[3])
            $(tr).append(td[4])

            $("#produtosPagamento").prepend(tr)
            // fim do - adicionando produtos à sacola em "pagar"
            
            // tratar valor total, resgatando desconto e calculando no processo
            
            vlTotalSDesc = td[4].innerHTML.slice(8);
            vlTotalSDesc = somaVlItens(vlTotalSDesc)
            valorTotalAPagar();
            document.getElementById("totalAPagarPagamento").innerHTML = vlTotalSDesc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("totalAPagarCDescontoPagamento").innerHTML = vlTotalCDesc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("totalAPagar").innerHTML = vlTotalCDesc.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.getElementById("descontoPagamento").innerHTML = descontosSomados.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }

        function somaVlItens(vlTotalItem){
            vlTotalItem = parseFloat(vlTotalItem)
            somaTotal = somaTotal + vlTotalItem;

            return somaTotal;
        }

        function valorTotalAPagar(){
            
            if(descontos.qtd_usos < descontos.qtd_max_usos && vlTotalSDesc >= 20){
                document.getElementById("vlTotalSDesc").innerHTML = "Valor Total";
                vlTotalCDesc = vlTotalSDesc - (vlTotalSDesc*(descontos.vl_desconto/100))
                descontosSomados = vlTotalSDesc*(descontos.vl_desconto/100);
            }else {
                document.getElementById("vlTotalSDesc").innerHTML = "Valor Total Sem Desconto";
                vlTotalCDesc = vlTotalSDesc
            }
            
        }

        $(document.getElementById("encomendarPedido")).on("click", encomendarPedido);
        
        function encomendarPedido(){
            let pagamentoConcluido = true;
            if(pagamentoConcluido){
                $(document.getElementById("encomendarPedido")).attr("data-target", "#resumoPedido")
                
                let jsonProdutos = fazerGet("http://127.0.0.1:5000/user/get/client/" + 2)
                let arrayCliente = trataObjeto(jsonProdutos)
                
                // let jsonPedido = {
                //     "cd_usuario": arrayCliente[1].cd_usuario
                // }; 

                let jsonPedido = JSON.stringify('{"cd_usuario":"'+arrayCliente[1].cd_usuario+'"}')
                console.log(typeof(jsonPedido))

                var req = new XMLHttpRequest();
                
                req.open('POST', 'http://127.0.0.1:5000/order/new', true);
                
                req.send(jsonPedido);
                
                req.onreadystatechange = function(){
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.responseText)
                    }
                    console.log(req.responseText)
                }
                
                // fetch("http://127.0.0.1:5000/order/new", {
                //     method: "POST",
                //     body: JSON.stringify({
                //         "cd_usuario": arrayCliente[1].cd_usuario
                //     }),
                // })
                // .then((response) => response)
                
                // .then((jsonPedido) => {
                //     console.log("Success:", jsonPedido);
                // })

                // .catch((error) => {
                //     console.error("Error:", error);
                // });
                
            }else {
                $(document.getElementById("encomendarPedido")).attr("data-target", "#erroPagamento")
            }  
        }
    }
});
