// Crie um array vazio chamado sacolao.
const sacolao = [];

// Crie três objetos que vão representar frutas do sacolão.
const fruta1 = {
    nome: 'maçã',
    preco: 4,
    disponibilidade: 'disponível'}
    
const fruta2 = {
    nome: 'laranja',
    preco: 3.2,
    disponibilidade: 'fora de estoque'}
    
const fruta3 = {
    nome: 'banana',
    preco: 3.8,
    disponibilidade: 'disponível'}

// Adicione os objetos ao array sacolao utilizando o método push().
sacolao.push({...fruta1}, {...fruta2}, {...fruta3})
// Imprima o array sacolao.
console.log(sacolao)