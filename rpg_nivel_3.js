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

Itens = ["Lâmina draconica", " Manto de eletrons", " Arco Espectral"];


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
ouro -= 25

Itens.push (" poção de vida");
console.log(`${Itens}`);
console.log("")

console.log("Então " + nome + " toma a poção e recupera a vida perdida, antes de sair");
console.log("da loja " + nome + " pergunta para o comerciante se ele conhecia algum");
console.log("lugar perto dali que ele poderia explorado");

Itens.pop("poção de vida")
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

equipe = ["Comerciante", " Nevam"];
equipe.length

console.log("");
console.log(`${equipe}, formam uma equipe`);
console.log("");
console.log("Então ele partem para a masmorra que ficava perto do lago, ao chegar no local");
console.log("os dois avistam então uma porta escondida entre vinhas que estavam na parede de ");
console.log("um desfiladeiro alguns metros do lago, na entrada damasmorra ele forção a entrada");
console.log("a porta se abre com um barulho alto a rangente");
console.log("");
console.log("-----------------------------------------------------------------------------------");
console.log("");
console.log("Dentro da masmorra");
console.log("");
console.log("Na entrada da primeira sala nada de mais é encontrada, apenas pedra, vinhas e um mapa");
console.log("na parede, os dois olham o mapa e se guiam por ele ")

salasmasmorra = ["sala vazia", " sala com inimigos", "sala com tesoura", "sala com inimigos 2", " escadaria", "sala final"];

for (let i = 1; i < salasmasmorra.length; i ++) {
    console.log(`sala: ${i}`)
}

console.log("")
console.log("Na segunda sala quando eles entram dois inimigos aparecem");
console.log("");

inimigos = ["goblins", " esqueleto"];
inimigosvida = [50, 70]

console.log("Então o comerciante e " + nome + " enfrentam os inimigos");
console.log("");
console.log(`${inimigos}`);
console.log("")

for (let i = 0; i <inimigos.length; i++ ) {
    console.log(` enfrentando: ${inimigos[i]} vida: ${inimigosvida[i]}`)

    let danonevam = Math.floor(Math.random() * 20) + DANOBASE;
    inimigosvida[i] -= danonevam;
    console.log(` ${nome} causou ${danonevam} de dano`);

    if (inimigosvida[i] > 0) {
        let danoComerciante = Math.floor(Math.random() * 15) + COMERCIANTEDANO;
        inimigosvida[i] -= danoComerciante;
        console.log(`Comerciante causo ${danoComerciante} de dano`)
    }

    if (inimigosvida[i] > 0) {
        let danoinimigos = Math.floor(Math.random () * 15) + 5;
        vidaatual -= danoinimigos;
        console.log(`${inimigos[i]} causou ${danoinimigos}`)

    }

    if (inimigosvida[i] <= 0) {
        console.log(` ${inimigos[i]} foi derrotado!`);
    } else {
        console.log(`❤️ Vida de ${nome}: ${vidaatual}`);
    }

    if (vidaatual <= 0) {
        console.log(" Você foi derrotado!");
    }
}

console.log("Fim da batalha!");
console.log(`❤️ Vida final de ${nome}: ${vidaatual}`);

console.log("");
console.log("No final da batalha os dois deixa a sala e seguem em diante");
console.log("");
console.log(salasmasmorra);
console.log("")
console.log("Ao entrar na sala a primeira visão que os dois tem é um baú no canto");
console.log("da sala, a cada sala que eles entram o ambiente é totalmente diferente");
console.log("o que parecia um espaço escuro umido e cinzento agora se tornou um lugar");
console.log("bem iluminado com cores vibrante parecendo um por do sol, a luz que estra-");
console.log("nhamente parecia ser artíficial, mas saia de uma janela tão luminosa que não");
console.log("era possível se enxergar o lado de fora");

bausala3 =["espada comum", " flechas ", " 28 moedas", " cristal azul"];
ouro += 28;

Itens.push(bausala3);
console.log(Itens);



    
