function sorteio(min, max){ //assinatura da função //(min, max) é argumento da função
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Arrow Function
//não tem nome, mas podem ser armazenadas em uma variável
//pode ter chaves, se tiver tem que ter o return
//const sorteio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


/*let numero1 = sorteio(0, 10);
let numero2 = sorteio(0, 50);
let numero3 = sorteio(15, 35);

console.log(numero1, numero2, numero3);*/

let lista = ["André", "Mario", "Antonio", "Jose", "Salah"];
console.log(lista[sorteio(0, lista.length - 1)]);

//posso ter uma lista de funções
//função dentro de objeot são métodos