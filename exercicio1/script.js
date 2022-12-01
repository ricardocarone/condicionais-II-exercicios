console.log("teste 1")

let numero = Number(prompt("Insira aqui um número:"))

//1. Utilizando ifs aninhados
if(numero%2===0){
    console.log(`Número escolhido foi ${numero} e ele é divisível por 2!`)
    }
    if(numero%3===0){
        console.log(`Número escolhido foi ${numero} e ele é divisível por 3!`)
    }


//2. Utilizando um operador lógico para unir duas operações relacionais

if(numero%2===0 || numero%3===0){
    if(numero%2===0){
        console.log(`Número escolhido é divisível por 2`)
    }
    if(numero%3===0){
        console.log(`Número escolhido é divisível por 3`)
    }
}