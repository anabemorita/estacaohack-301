/*
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}*/

for(let i =1; i <= 10; i++){
    console.log(i);
}

//para iterar com listas
//for of e for in

let lista = ["James", "Nomes", "Wolfgang", "Golfinho", "Jurupinga", "Nomi", "Cleide", "Tainá"];

//for in
//percorrer uma lista, a variavel interna assume um indice da lista
//tambem funciona para objetos
for(let item in lista){ 
    console.log(item);
}

//for of
//percorre uma lista, a variavel interna assume o valor de cada indice da lista
//nao funciona para objetos
for(let item of lista){
    console.log(item);
}