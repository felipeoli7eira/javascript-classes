var loja = "automoto"
var carro = {
    nomeDaLoja: loja,
    modelo: "hatch",
    marca: "fiat",
    ano: 2020,
    valor: 45000,
    
    cachorro: {
        nome: "robertinho",
        idade: 3,
        peso: 15,
        dono: {
            nome: "joaci",
            idade: 46
        },
        vivo: false,
        morto: true
    }
}
var outroObjeto = {
    meuObjetoAnterior: carro
}
//console.log (carro)
//como acesso uma informação de um objeto específico
//console.log (carro)
console.log (outroObjeto.meuObjetoAnterior.cachorro.morto)

console.log(teste)