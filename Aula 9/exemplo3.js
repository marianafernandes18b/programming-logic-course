let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Morango"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log("Varredura com for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("Varredura com In");
for (let fruta in frutas) {
    console.log(frutas[fruta]);
}

console.log("Varredura com forEach:");
frutas.forEach((fruta) => {
    console.log(fruta);
});














