let nome = "Nevam"
let classe = "Guerreiro"
let nivel = 15;
let vidamaxima = 100;
let vidaatual = 70;
let ouro = 50;
let xp = 28;
let persuasao = 10
let agilidade = 10;
let mana = 50;

const NOMEARMA = "Lâmina draconica"
const DANOBASE = 78;
const NOMEARMADURA = "Manto de eletrons"
const DEFESABASE = 60;
const ARCO = "Arco Espectral"
const ARCOATAQUE = 100;

Itens = ["Lâmina draconica", " Manto de eletrons", " Arco Espectral"]


console.log("Prólogo");
console.log("");
console.log("----------------------------------------------------------");
console.log(nome + " Continua na sua jornada para encontrar a vila mais próxima");
console.log("para comprar uma poção de vida ou alguma forma de recuperar vida, pois");
console.log("após a batalha contra o Druida " + nome + " foi ferido.");
console.log("");

// Nível 3

console.log("")
console.log("----------------------------------------------------------")
console.log("Após algumas horas andando " + nome + " acha um vilareijo no topo de ");
console.log("uma colina, o lugar é bem iluminado e as casas pareciam ser feitas de ");
console.log("cristal misturado com alguma tecnologia desconhecida," + nome + " acha");
console.log("uma loja com algumas poções.");
console.log("");
console.log("Comerciante: As poções a venda são essas");
console.log("");

let pocoes = ["poção de vida", "poção de força", "poção de agilidade", "poção de mana"]

for(let i = 0; i < pocoes.length; i++) {
    console.log(`${pocoes[i]}`)
  
}

console.log("");
console.log(nome + ": eu vou querer a poção de vida");
console.log(nome + ": Qual o valor dela?");
console.log("");
console.log("Comerciante: 25 Moedas");
console.log("");
console.log(nome + ": Eu vo levar");
console.log("");

Itens.push (" poção de vida");
console.log(`${Itens}`);
console.log("")

console.log("Então " + nome + " toma a poção e recupera a vida perdida, antes de sair");
console.log("da loja " + nome + " pergunta para o comerciante se ele conhecia algum");
console.log("lugar perto dali que poderia se explorado");

vidaatual += 30

console.log(" ")
