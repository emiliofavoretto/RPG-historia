  // continuação do rpg, atributos

let nome = "Nevam"
let classe = "Guerreiro"
let nivel = 15;
let vidamaxima = 100;
let vidaatual = 100;
let ouro = 50;
let xp = 28;
let persuasao = 10

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
console.log("Capítulo 1");
console.log("-----------------------------------------------------------------------------")
console.log("")
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

console.log("então finalmente o paladino é derrotado pelo heroi " + nome + " se tomar dano e vai para o tesouro");
console.log("ao chegar no baú da sala e o abre e encontra um arco e o batiza de " + ARCO + " e então vai embora");
console.log("do castelo, pouco depois de caminhar para foram do ele encontra um anão que o propoem uma troca");

//capítulo 2
console.log("");
console.log("Começo do 2 capítulo");
console.log("-------------------------------------------------------------------------");
console.log("");
console.log(nome + " Pergunta o que seria a troca e em resposta o anão diz");
console.log("ANÃO: Você acabou de sair do castelo espectral, eu tenho interese em alguns itens que foram ");
console.log("levado para dentro do castelo a alguns anos atrás e que fazinham parte de uma coleção particular");
console.log("um desses itens era um arco que se parece muito com o que você está carregando agora.");
console.log("")

console.log(nome + ": Você está me observendo desde que eu entrei no castelo?");
console.log("");
console.log("Anão: Sim, quero dizer talvez, eu estava andando por aqui e te observei quando entror no castelo ");
console.log("e eu me perguntei, quem seria louco ou corajoso de fazer isso, eu tenho mais de 50 anos eu não");
console.log("poderia mais fazer isso e recuperar o meu arco por conta propria.");
console.log("");
console.log("Silêncio muito longo");
console.log("");

const ANAOPERSUASAO = 5

if (ANAOPERSUASAO > persuasao) {
    console.log("Anão pega o arco");
} else {
    console.log(nome + " se nega a entregar o item");
}

console.log("");
console.log(nome + ": Como você me da a garantia de que o arco é seu?");
console.log("");
console.log("Anão: 😶😑😐😑 você poderia então me vender o arco?");;
console.log("");
console.log(nome + ": Por 400 moedas, o arco é épico e eu nunca vi ele sendo vendido em outra região.");
console.log("");
console.log("Anão diz com uma voz grossa: Pô meu tá caro ein!. E depois salta para cima de " + nome );
console.log("");
console.log("então o anão se destransforma e vira um humano ");
console.log("");
console.log(nome + ": Como assim você é um humano? ");
console.log("");
console.log("Anão: Eu sou um druida");
console.log("");
console.log("O druida puxa o arco das mãos de " + nome + " e foge pela floresta mais próxima enquanto");
console.log(nome + " o persegue entre as arvores");
console.log("");
console.log("--------------------------------------------------");

// Capítulo 3 