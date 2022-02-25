let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")


//Responsavel por converter a moeda
async function converterMoedas(){

	let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( function(resposta){
		return resposta.json()
	})

	let dolar = moedas.USDBRL.high
	let euro = moedas.EURBRL.high
	let bitcoin = moedas.BTCBRL.high


	let valorReais = Number(document.getElementById("valor").value)
	let inputMoedas = document.getElementById("input-moedas")
	let textoReal = document.getElementById("texto-real")

	if(select.value === "$ - Dólar Americano"){
		let valorDolares = valorReais / dolar
		inputMoedas.innerHTML = valorDolares.toLocaleString("en-US" ,{style: "currency", currency: "USD"})
	}

	if(select.value === "€ - Euro"){
		let  valorEuro = valorReais / euro
		inputMoedas.innerHTML = valorEuro.toLocaleString("de-DE" ,{style: "currency", currency: "EUR"})
	}

	if(select.value === "Bitcoin"){
		let valorBit = valorReais / bitcoin
		inputMoedas.innerHTML = valorBit.toFixed(0)
	}

	
	textoReal.innerHTML = valorReais.toLocaleString("pt-br" ,{style: "currency", currency: "BRL"})
}


//Responsavel por trocar bandeira e nome da moeda
function trocaMoeda(){

	let textoMoedas = document.getElementById("texto-moedas")
	let bandeiraMoeda = document.getElementById("bandeira-moeda")

	if(select.value === "$ - Dólar Americano"){
		textoMoedas.innerHTML = "Dólar Americano"
		bandeiraMoeda.src = "./image/band_eua.png"
	}

	if(select.value === "€ - Euro"){
		textoMoedas.innerHTML = "Euro"
		bandeiraMoeda.src = "./image/band_euro.png"
	}

	if(select.value === "Bitcoin"){
		textoMoedas.innerHTML = "Bitcoin"
		bandeiraMoeda.src = "./image/band_bitcoin.png"
	}

	converterMoedas()
}

botao.addEventListener("click" , converterMoedas)
select.addEventListener("change" , trocaMoeda )