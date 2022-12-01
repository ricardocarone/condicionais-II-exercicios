
console.log("teste 2")
let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

if (nacionalidade === "brasileira") {
    console.log("a pessoa é do Brasil!");
} else if (nacionalidade === "argentina") {
    console.log("a pessoa é da Argentina!");
} else if (nacionalidade === "uruguaia") {
    console.log("a pessoa é do Uruguai!");
} else if (nacionalidade === "chilena") {
    console.log("a pessoa é do Chile!");
} else if (nacionalidade === "colombiana") {
    console.log("a pessoa é da Colômbia!");
} else {
    console.log("nacionalidade não encontrada")
}

console.log("(SWITCH-CASE)")

switch (nacionalidade) {
    case "brasileira":
        console.log("Nacionalidade é Brasileira")
        break;
    case "argentina":
        console.log("Nacionalidade é Argentina")
        break;
    case "uruguaia":
        console.log("Nacionalidade é Uruguaia")
        break;
    case "chilena":
        console.log("Nacionalidade é Chilena")
        break;
    case "colombiana":
        console.log("Nacionalidade é colombiana")
        break;
    default:
        console.log("Nacionalidade não encontrada!")
}
