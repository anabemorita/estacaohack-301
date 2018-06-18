let meninos = ["João", "Lucas", "Mateus", "Pedro", "Rodrigo"];
let meninas = ["Carol", "Fernanda", "Gabriela", "Isabela", "Maria"];
let duplas = [];

for(let menino of meninos){
    for(let menina of meninas){
    duplas.push(menino + " e " + menina);
    }
}

console.log(duplas);