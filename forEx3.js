let tamanho = Number(prompt("Qual tamanho da escada?"));
let material = prompt("Qual o material da escada");
let escada = "";

for(let i = 0; i < tamanho; i++){
    escada = escada + material;
    console.log(escada);
}