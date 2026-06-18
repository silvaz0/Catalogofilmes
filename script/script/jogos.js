const jogos = [{
    titulo: "Free Fire",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a8/Free_fire_battlegrounds.jpg/250px-Free_fire_battlegrounds.jpg",
    descricao: "O Free Fire é um jogo de tiro estilo Battle Royale desenvolvido pela 111dots Studio e publicado pela Garena. O objetivo é ser o último sobrevivente entre 50 jogadores em uma ilha, coletando armas, eliminando adversários e fugindo do gás. É gratuito, rápido e otimizado para celulares."
},
{
    titulo: "Standoff",
    imagem: "https://static-cdn.jtvnw.net/ttv-boxart/513501_IGDB-272x380.jpg",
    descricao: "Standoff 2 é um jogo de tiro em primeira pessoa (FPS) multijogador gratuito, desenvolvido pela Axlebolt. Conhecido como o CS:GO mobile, ele traz combates táticos rápidos, gráficos de alta qualidade e uma grande variedade de modos de jogo, armas e personalizações."
},
{
    titulo: "Clash Of Clans",
    imagem: "https://i.pinimg.com/originals/5b/bc/65/5bbc65f4d8fb04dbe410053e3e07a4a5.jpg",
    descricao: "Clash of Clans é um popular jogo de estratégia para celular onde os jogadores constroem e fortificam sua própria vila. O objetivo é treinar tropas, coletar recursos e atacar bases inimigas para subir de nível e competir em Guerras de Clãs com outros jogadores.",
},
{
    titulo: "Minecraft",
    imagem: "https://i.pinimg.com/564x/f2/c7/11/f2c711bbc828f4691831d3f1aa2fc787.jpg",
    descricao: "O Minecraft é um jogo eletrônico do gênero sandbox (caixa de areia) e sobrevivência sem um objetivo linear. Em um mundo aberto e gerado aleatoriamente, os jogadores exploram paisagens infinitas e extraem recursos para construir estruturas complexas, fabricar ferramentas e lutar contra criaturas noturnas."
},
{
    titulo: "Rocket League",
    imagem: "https://i.pinimg.com/236x/98/00/af/9800af8d6587d069e43cde818aa2d3c6.jpg",
    descricao: "Rocket League é um popular jogo eletrônico que mistura corrida de carros e futebol, onde os jogadores controlam veículos turbinados para empurrar uma bola gigante até o gol adversário."
},
{
    titulo: "Red Dead Redemptions 2",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png",
    descricao: "A franquia Red Dead Redemption é uma obra-prima de ação e aventura em mundo aberto focada no declínio do Velho Oeste. A saga aborda temas como honra, lealdade e redenção, dividida em dois jogos principais que exploram a famosa gangue de Van der Linde."
}
]

 const listarJogos = document.getElementById("listarJogos");
 
 function mostrarJogos(lista) {
    listarJogos.innerHTML = ""
    lista.forEach(jogo => {
       listarJogos.innerHTML += `
       <div class="col-md-4">
            <div class="card card-jogo h-100">
            <img src="${jogo.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${jogo.titulo}</h3>
                <p>${jogo.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${jogo.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarJogos(jogos)
function verDetalhes(titulo) {
    Swal.fire({
        títle: titulo,
        Text: "Mais informações do jogo",
        icon: "info"
    })
}