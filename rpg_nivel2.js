  // continuação do rpg, atributos

let nome = "Nevam"
let classe = "Guerreiro"
let nivel = 15;
let vidamaxima = 100;
let vidaatual = 100;
let ouro = 50;
let xp = 28;

const NOMEARMA = "Lâmina draconica"
const DANOBASE = 78;
const NOMEARMADURA = "Manto de eletrons"
const DEFESABASE = 60;

// Novos atributos do personagem 

let agilidade = 10;
let mana = 50;

// Estado atual da historia
let localatual = "Castelo espectral"
let missaoatual = "enfrentar boss do castelo"

//Prólogo 

console.log("Prólogo: Nevam passa por um templo de placa luminosas e enfrenta inimigos ");
console.log("ao sair do templo como novos recorsos ele decide ir para um castelo e ao entrar");
console.log("sente um presença");
console.log("-----------------------------------------------------------------------------")
console.log("Ao entrar na sala dos tessouros ele ve um paladino cyborg e decide enfrentar-lo");

//Capítulo 1

let vidapaladio = 100;

if(nivel >= 12) {
    console.log("pode enfrentar paladino cyborg");
} else {
    console.log("não pode enfrentar paladino cyborg") ;
}

console.log("então uma batalha começa, primeiro o paladino ataca com uma lança então Nevam desvia");
console.log("quando o paladino ataca ele fica vulneravel, Nevam usa sua espada " + NOMEARMA + " e");
console.log("o contra ataca acertando com um crítico");

const ATAQUEPALADINO = 45;
const DEFESAPALADINO = 50;

if (nivel >= 12) {
    console.log("quebra defesa");
}

console.log(vidapaladio + DEFESAPALADINO - DANOBASE)

console.log("com seu nível ele quebra a defesa do inimigo, em seguida ele pega uma poção de veneno");
console.log("e joga em cima do paladino, mas como a sua agilidade é maior que a de " + nome + " ele ");

const AGILIDADEDOPALADINO = 15;

if (agilidade >= AGILIDADEDOPALADINO) {
    console.log("acerta paladino");
} else {
    console.log("não ecerta paladino");
}

console.log("com o impulso do desvio o paladino acerta " + nome + " com a lança, mas sua defesa de 60");

if (DEFESABASE >= ATAQUEPALADINO) {
    console.log(nome + " bloqueia ataque");
}

console.log("após o ataque " + nome + " cai no chão, mas ele se levanta rapidamente e ataca o paladino");

if (DANOBASE >= DEFESAPALADINO) {
    console.log(nome + " acerta o paladino");
}
console.log(vidapaladio + DEFESAPALADINO * 2 - DANOBASE * 2 );

console.log("então ele pega uma poção para aumentar seu dano e ganha mais 16 pontos de dano e se prepara");
console.log("o paladino da uma envestida contra " + nome + " e ele desvia do seu ataque dando um contra ataque");

if (DANOBASE >= DEFESAPALADINO){
    console.log(nome + " acerta o paladino");
} 

console.log(vidapaladio + DEFESAPALADINO * 3 - DANOBASE * 3 - 16);

const ARCO = "Arco Espectral"

console.log("então finalmente o paladino é derrotado pelo heroi" + nome + " se tomar dano e vai para o tesouro");
console.log("ao chegar no baú da sala e o abre e encontra um arco e o batiza de" + ARCO + " e então vai embora");
console.log("do castelo, pouco depois de caminhar para foram do castelo ele encontra um anão que  o propoem uma troca");

//capítulo 2