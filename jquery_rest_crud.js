/***********************
	LISTAR VEICULOS
***********************/
function listar(){
	$.ajax({
		url		: 'http://localhost:8080/TrabalhoSwFinal/servicos/veiculo/listar',
		dataType: 'json',
		method	: "GET", 
		cache	: false,
		success	: function (data) {
			$("#listaVeiculos").html(" ");
			
			$.each(data, function (index, veiculos) {
				$("#listaVeiculos").append("<li>"+
					"<a href='inserir.html?id="+veiculos.id+"'><div class='editar'></div></a>"+
					"<span class='fechar' rel="+veiculos.id+"></span>"+
						"<div class='titulo'> VEICULO "+veiculos.id+"</div>"+
						"<div> <div class='item'>MARCA:</div> "+veiculos.marca+"</div>"+
						"<div> <div class='item'>MODELO:</div> "+veiculos.modelo+"</div>"+
						"<div> <div class='item'>ANO:</div> "+veiculos.ano+"</div>"+
						"<div> <div class='item'>COR:</div> "+veiculos.cor+"</div>"+
						"<div> <div class='item'>PLACA:</div> "+veiculos.placa+"</div>"+
					"</li>");
			});
		}
	});		
}	

/***********************
	RECUPERAR VEICULOS
***********************/
function recuperar(idRecuperado){
	$.ajax({
		url		: 'http://localhost:8080/TrabalhoSwFinal/servicos/veiculo/listar',
		dataType: 'json',
		method	: "GET", 
		cache	: false,
		success	: function (data) {
			$.each(data, function (index, veiculos) {				
				if(veiculos.id == idRecuperado){
					$("#marcaVal").val(veiculos.marca);
					$("#modeloVal").val(veiculos.modelo);
					$("#anoVal").val(veiculos.ano);
					$("#corVal").val(veiculos.cor);
					$("#placaVal").val(veiculos.placa);
				}	
			});
		}
	});		
}	

/***********************
	INSERIR VEICULOS
***********************/
function inserir(marcaN, modeloN, anoN, placaN, corN){	
	var veiculo = {
		marca	: marcaN,
		modelo	: modeloN,
		ano		: anoN,
		placa	: placaN,
		cor		: corN  	
	};
	
	$.ajax({
		url: 'http://localhost:8080/TrabalhoSwFinal/servicos/veiculo/',
		type:'POST',
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(veiculo) ,
		success: function (data) {
			alert("Veiculo Cadastrado!");
			window.location.href = 'listar.html';
		}
	});	
}

/***********************
	EDITAR VEICULOS
***********************/
function atualizar(idN, marcaN, modeloN, anoN, placaN, corN){
	var veiculo = {
		id		: idN,
		marca	: marcaN,
		modelo	: modeloN,
		ano		: anoN,
		placa	: placaN,
		cor		: corN  	
	};
	
	console.log(veiculo);
	
	$.ajax({
		url: 'http://localhost:8080/TrabalhoSwFinal/servicos/veiculo/',
		type:'PUT',
		dataType: 'json',
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(veiculo) ,
		success: function (data) {
			alert("Veiculo Editado!");
			window.location.href = 'listar.html';
		}
	});	
}	


/***********************
	EXCLUIR VEICULOS
***********************/
function excluir(id){	
	$.ajax({
		url: 'http://localhost:8080/TrabalhoSwFinal/servicos/veiculo/'+id,
		dataType: 'json',
		method: "DELETE", 
		cache: false,
		success: function (data) {
			listar();
			alert("Veículo Excluido!")
		}
	});	
}


/************************
   PEGA URL PARAMETRO
************************/
function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};