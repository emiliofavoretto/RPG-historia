let nome = "Nevan";
let classe = "Guerreiro";
let nivel = 15;
let vida = 100;
let ouro = 50;
let xp = 27;

const NOMEARMA = "Lâmina dracônica";
const DANBASE = 78;
const NOMEARMADURA = "Manto de eletrons";
const DEFESA_BASE = 68;

nivel += 1;
xp += 150;
ouro += 38;
vida += 48;

console.log( DANBASE + 2);

ataqueTotal = nivel + DANBASE;
defesaTotal = DEFESA_BASE + (nivel / 2);

vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel > 10;
podemosEnfrentarGuardião = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(vidaSuficiente);
console.log(ataqueForte);
console.log(nivelAvancado);
console.log(podemosEnfrentarGuardião);

console.log(" Livro do Herói: Nevan");
console.log("-------------------------------------------------");
console.log("O " + nome + " o guerreiro caminhava entre os salões de um templo feito de placas luminosas ");
console.log("com seu " + NOMEARMADURA + " e sua " + NOMEARMA + " quando encontra um inimigo robótico ");
console.log("com sua espada em mãos ele corta o inimigo dando " + DANBASE + " de dano, matando o monstro");
console.log("pouco tempo depois encontrando uma escadaria ao subir-la se depara com uma sala escura");
console.log("em um baú do outro lado da sala ao andar em direção ao baú um laser é disparado de um");
console.log("painel para o " + NOMEARMADURA + " que com sua defesa de " + defesaTotal + " pontos consegue ");
console.log("se proteger do raio, abrindo baú ele encontra algumas moedas e fica com um total de ");
console.log(ouro + " moedas, depois dessa batalha no templo ele consegue " + xp + " de xp e sobe de nível ");
console.log("em direção a uma nova localização, durante o caminho ele toma uma poção e recupera " + vida);
console.log("pontos de vida, ao chegar no castelo espectral ele entra.");
console.log(vidaSuficiente || ataqueForte || nivelAvancado);
console.log("então ele entra no castelo sentindo uma presença poderosa e entrando na sala dos tesouros " + podemosEnfrentarGuardião);

