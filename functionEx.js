function ex1() {
    let cliente = {};
    let emprestar;

    cliente.idade = Number(prompt("Qual a sua idade?"));
    cliente.valor = Number(prompt("Qual o valor do empréstimo?"));
    cliente.salario = Number(prompt("Qual o seu salario?"));

    if ((cliente.idade > 21 && cliente.idade < 55) && cliente.valor >= 1000 && (cliente.valor < (cliente.salario * 15))) {
        emprestar = true;
    }

    //EXTRA
    if (emprestar) {
        //cria a variavel prestacao e recebe valor já convertido para numero  
        let parcelas = Number(prompt("Em quantas prestações pretende pagar?"));
        let montante;

        if (parcelas > 2 && parcelas < 21) {
            montante = cliente.valor * Math.pow(1 + 0.08, parcelas);
        }
        montante = montante.toFixed(2);
        let parcelaValor = montante / parcelas;
        parcelaValor = parcelaValor.toFixed(2);
        alert("ACEITO");
        alert(`O valor total do empréstimo é de R$${montante} reais, a serem pagos em ${parcelas} parcelas de R$${parcelaValor}`);
    }
    else {
        alert("NÃO ACEITO");
    }
}

function sorteio(){
    let numero = Math.random(); //função math.random gera um valor aleatório entre 0 e 1

    while (numero > 0.5) { //enquanto o número for maior que .5 gera um novo valor
        numero = Math.random();
    }

    numero *= 100; //multiplica o numero por 100 transformando o valor gerado em número entre 0 e 50
    numero = parseInt(numero);
    return numero;
}

function ex2() {
    numero = sorteio();
    let chute = Number(prompt("Digite seu palpite de número entre 0 e 50"));

    while (chute === NaN) { //enquanto o chute for inválido pede um novo valor de entrada ao usuário
        chute = Number(prompt("Valor inválido, digite um número entre 0 e 50"));
    }

    while (numero !== chute) {
        if (numero < chute) {
            chute = Number(prompt("O número é menor. Digite um novo palpite"));
        }
        else {
            chute = Number(prompt("O número é maior. Digite um novo palpite"));
        }

    }

    alert("ACERTOU");
}

function ex3() {
    let tamanho = Number(prompt("Qual tamanho de escada você que desenhar?"));
    let material = prompt("Qual o material da escada?");
    let escada = [];
    let contador = 1;

    while(contador <= tamanho){    
        if(escada[0]===undefined){
            escada.push(material);
        }
        escada.push(escada[contador - 1] + material); 
        contador ++;
    }
    console.log(escada);
}

function ex4() {
    let meninos = ["João", "Lucas", "Mateus", "Pedro", "Rodrigo"];
    let meninas = ["Carol", "Fernanda", "Gabriela", "Isabela", "Maria"];
    let duplas = [];

    for (let menino of meninos) {
        for (let menina of meninas) {
            duplas.push(menino + " e " + menina);
        }
    }

    console.log(duplas);
}

function ex5() {
    let usuario = {};
    let dataDeNascimento = {};
    let idade = 0;

    //recebe valores das chaves de usuario
    usuario.nome = prompt("Qual o seu nome?");
    usuario.login = prompt("Qual o seu login?");
    usuario.senha = prompt("Qual a sua senha?");
    usuario.dataDeNascimento = prompt("Qual a sua data de nascimento? Formato DD/MM/AAAA");
    usuario.premium = confirm("É usuário premium?");

    // .split divide o texto em partes separadas pelo valor indicado entre parenteses e coloca num vetor
    //  cada indice do vetor indica uma parte da data
    dataDeNascimento.dia = Number(usuario.dataDeNascimento.split("/")[0]);
    dataDeNascimento.mes = Number(usuario.dataDeNascimento.split("/")[1]);
    dataDeNascimento.ano = Number(usuario.dataDeNascimento.split("/")[2]);

    idade = 2018 - dataDeNascimento.ano;

    // cálculo para verificar quantos anos o usuario terá no dia do hexa
    // data da final da copa(hexa) 15/07/2018
    if (dataDeNascimento.mes > 7) {
        idade--;
    }
    if (dataDeNascimento.mes === 7 && dataDeNascimento.dia > 15) {
        idade--;
    }

    console.log(usuario);
    console.log(`Você terá ${idade} anos no dia do Hexa`);
}