let nome = "Nevam"
let classe = "Guerreiro"
let nivel = 16;
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
console.log("lugar perto dali que ele poderia explorado");

vidaatual += 30

console.log("")
console.log("Comerciante: existe uma masmorra perto do lago abaixo do vilareijo ");
console.log("Comerciante: você tem alguma intensão específica na masmorra?");
console.log("");
console.log(nome + " Não só estou procurando itens raros para vender mais tarde");
console.log("");
console.log("Comerciante: Eu poderia ir junto com você? tem uma lenda de uma poção de");
console.log("imortalidade que ninguém sabe ao certo a sua localização e eu queria tentar");
console.log("encotra-lá.");
console.log("");
console.log(nome + ": Eu geralmente trabalho sozinho ");
console.log("");
console.log("Comerciante: Não se finja de lobo solitario você vai precisar da minha ajuda");
console.log("");
console.log(nome + ": Ok 😑");

let comerciantevidamaxima = 85;
let comerciantevidaatual = 85
let comercianteclasse = "mago"
let comerciantemana = 80;
let comercianteagilidade = 10;
let comercianteouro = 999;
let comerciantenivel = 15

const COMERCIANTEDANO = 50
const COMERCIANTEDEFESA = 50;
const COMERCIANTEARMA = "Cajado solar"

equipe = ["Comerciante", " Nevam"]
equipe.length

console.log("");
console.log(`${equipe}, formam uma equipe`);
console.log("");
console.log("Então ele partem para a masmorra que ficava perto do lago, ao chegar no local");
console.log("os dois avistam então uma porta escondida entre vinhas que estavam na parede de ");
console.log("um desfiladeiro alguns metros do lago, na entrada damasmorra ele forção a entrada");
console.log("a porta se abre com um barulho alto a rangente");
console.log("");
console.log("--------------------------------------------------------------------------------");
console.log("");
console.log("Dentro da masmorra");
console.log("");
console.log("")