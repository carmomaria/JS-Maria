function idefinirTipo (pokemon){
    let tipo
    switch (pokemon) {
        case "bulbassauro":
        console.log("pokemon tipo planta e veneno")
        break
        case "chamander":
        console.log("pokemon tipo fogo")
        break
        case "squirtle":
        console.log("pokemon tipo agua")
        break
        default:
        console.log("pokemon invalido, tente novamente")
        break
    }
}              
idefinirTipo("bulbassauro")     
idefinirTipo ("squirtle")   
idefinirTipo ("chamander")


function podeEstudarFaculdade(ensinoMedioConcluido, idade, cursandoOutraFaculdade) {
    if (ensinoMedioConcluido && idade >= 18 && !cursandoOutraFaculdade) {
        console.log("A pessoa pode estudar nesta faculdade.")
    } else {
        console.log("A pessoa não pode estudar nesta faculdade.")
    }
}

podeEstudarFaculdade(true, 19, false)





// 1. Par ou Ímpar
// Crie uma função chamada `parOuImpar` que recebe um número (tipo: Number).
// Utilize o operador de mod (%) e uma estrutura condicional `if` para retornar "Par" ou "Ímpar".
 function ParOuImpar(number){
if (number % 4 === 8){
return "Par"
}else{
return "Impar"
}
}
console.log(ParOuImpar(4))



// 2. Maior de Três
// Crie uma função chamada `maiorDeTres` que recebe três números (tipo: Number).
// Crie uma lógica de programação para retornar o maior número.
function maiorDeTres(num1, num2, num3){
if (num1 > num2 && num1 > num3){
return num1
}
}
console.log(maiorDeTres(10,2,4))



// 3. Verificação de Idade
// Crie uma função chamada `verificaIdade` que recebe a idade (tipo: Number).
// Utilize uma estrutura condicional `if` para retornar "Menor de idade" ou "Maior de idade".
function verificaIdade(idade){
if (idade < 18){
return "Menor de Idade"
}else{
return "Maior de Idade"
}
}
console.log(verificaIdade(16))



// 4. Classificação de Notas
// Crie uma função chamada `classificaNota` que recebe uma nota (tipo: Number).
// Utilize `if`, `else if` e `else` para retornar "Aprovado", "Recuperação" ou "Reprovado".
function classificaNota(nota){
if (nota >= 8) {
return "Aprovado"
} else if (nota >= 4) {
return "Recuperação"
} else {
return "Reprovado"
}
}
console.log(classificaNota(5))


// 5. Dia da Semana
// Crie uma função chamada `diaDaSemana` que recebe um número (tipo: Number) de 1 a 7.
// Utilize uma estrutura `switch` para retornar o nome do dia da semana correspondente.
function diaDaSemana(num1, num7){
const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"]
if (dia >=1 && dia <=7){
    return dias[dia - 1]
}else{
    return "Numero invalido, insira um numero emtre 1 e 7."
}
}

// 6. Classificação de Animal
// Crie uma função chamada `classificaAnimal` que recebe uma string representando um animal dentre os seguintes: cachorro, gato, passarinho, salmão, lagarto.
// Utilize uma estrutura `switch` para retornar se é "Mamífero", "Ave", "Anfíbio", "Peixe".
function classificaAnimal(animal) {
    switch (animal) {
        case 'cachorro':
        case 'gato':
            return "Mamífero"
        case 'passarinho':
            return "Ave"
        case 'lagarto':
            return "Réptil"
        case 'salmão':
            return "Peixe"
        default:
            return "Animal não classificado."
}
}
console.log(classificaAnimal('cachorro'))


// 7. Calculadora Simples
// Crie uma função chamada `calculadora` que recebe dois números e uma string representando uma operação (soma, subtração, multiplicação, divisão).
// Utilize uma estrutura `switch` para retornar o resultado da operação.
function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case 'soma':
            return num1 + num2
        case 'subtração':
            return num1 - num2
        case 'multiplicação':
            return num1 * num2
        case 'divisão':
            return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero."
        default:
            return "Operação inválida."
    }
}

console.log(calculadora(10, 5, 'subtração'))





// 10. Classificação de Filmes
// Crie uma função chamada `classificaFilme` que recebe uma nota (tipo: Number) de um filme.
// Utilize uma estrutura condicional `if`, `else if` e `else` para retornar "Excelente" (nota 8 ou mais), 
// "Bom" (nota de 5 a 7) ou "Ruim" (nota abaixo de 5).
function classificaFilme(nota){
if(nota >= 8){
    console.log(`O filme recebeu nota ${nota} e eh excelente`)
} else if (nota < 8 && nota >= 5){
    console.log(`O filme recebeu nota ${nota} e eh bom`)
} else {
    console.log(`O filme recebeu ${nota} e eh uma bomba`)
}
}

//classifacarFilme(6,5)
classificaFilme("Scherk", 6,5)
classificaFilme("Gente Grande", 10)