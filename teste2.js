// Personagem
let nome = "Nevam";
let vidaAtual = 70;
const DANOBASE = 78;

// Comerciante
let comercianteVida = 85;
const COMERCIANTEDANO = 50;

// Lista de inimigos
let inimigos = ["Goblin", "Orc", "Lobo Sombrio"];
let inimigosVida = [40, 60, 50]; // mesma ordem do array acima

console.log("\n⚔️ Início da batalha!");

// Loop pelos inimigos
for (let i = 0; i < inimigos.length; i++) {
    console.log(`\n🐲 Enfrentando: ${inimigos[i]} (Vida: ${inimigosVida[i]})`);

    // Ataque do jogador
    let danoJogador = Math.floor(Math.random() * 20) + DANOBASE;
    inimigosVida[i] -= danoJogador;
    console.log(`💥 ${nome} causou ${danoJogador} de dano!`);

    // Ataque do comerciante
    if (inimigosVida[i] > 0) {
        let danoComerciante = Math.floor(Math.random() * 15) + COMERCIANTEDANO;
        inimigosVida[i] -= danoComerciante;
        console.log(`🔥 Comerciante causou ${danoComerciante} de dano!`);
    }

    // Inimigo contra-ataca
    if (inimigosVida[i] > 0) {
        let danoInimigo = Math.floor(Math.random() * 15) + 5;
        vidaAtual -= danoInimigo;
        console.log(`💢 ${inimigos[i]} causou ${danoInimigo} de dano!`);
    }

    // Resultado
    if (inimigosVida[i] <= 0) {
        console.log(`✅ ${inimigos[i]} foi derrotado!`);
    } else {
        console.log(`❤️ Vida de ${nome}: ${vidaAtual}`);
    }

    if (vidaAtual <= 0) {
        console.log("💀 Você foi derrotado!");
    }
}

console.log("\n🏁 Fim da batalha!");
console.log(`❤️ Vida final de ${nome}: ${vidaAtual}`);
