const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
pokemon1.ataques = []
// criando cópia do objeto pokmeon1
const pokemon2 = {...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}
pokemon2.ataques = [];

const ataques = {
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
}
const ataques2 = {
    nome: 'Folha de navalha',
    dano: 45,
    tipo: 'Grama',
    precisao: 100
}
const ataques3 = {
    nome: 'Jato de Água',
    dano: 40,
    tipo: 'Água',
    precisao: 100,
}
pokemon1.ataques.push([{...ataques}], [{...ataques2}])
pokemon2.ataques.push([{...ataques3}])

console.log(pokemon1)
console.log(pokemon2)
// console.log(pokemon1)