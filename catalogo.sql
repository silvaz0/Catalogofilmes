create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table jogos (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

insert into filmes (titulo, imagem, descricao) values
("Mortal Kombat",
"https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
"O lutador de MMA Cole Young é caçado pelo imperador da Exoterra, Shang Tsung, e seu guerreiro Sub-Zero. Para proteger sua família e salvar o mundo, Cole busca Lorde Raiden e junta-se aos maiores campeões da Terra no sangrento torneio interdimensional, o Mortal Kombat."
),

("Batman",
"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
"O filme Batman (2022) foca no segundo ano de Bruce Wayne como o vigilante de Gotham. Quando um serial killer conhecido como Charada assassina a elite da cidade, o herói é forçado a mergulhar no submundo criminal, descobrindo uma teia de corrupção que envolve até mesmo o passado de sua própria familia."
),

("Homem-Aranha",
"https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
"Ao ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinato de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde."
),

("Doutor Estranho",
"https://media.themoviedb.org/t/p/w300_and_h450_face/pb4clPWRJ5AKlSFu1HrrHdt5uAw.jpg",
"O neurocirurgião Stephen Strange sofre um acidente de carro que incapacita suas mãos. Buscando a cura, ele chega ao templo de Kamar-Taj, onde descobre o mundo das artes místicas e dimensões alternativas. Ele se torna um Mago Supremo, defendendo a Terra de ameaças místicas."
),

("Interestelar",
"https://media.themoviedb.org/t/p/w300_and_h450_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
"Em um futuro onde a Terra está morrendo devido a colheitas fracassadas e tempestades de poeira, a humanidade enfrenta a extinção. Para salvar a espécie, o ex-piloto Cooper é convocado pela NASA para liderar uma missão espacial através de um buraco de minhoca, na busca por um novo planeta habitável."
),

("Velozes e Furiosos Desafio em Tóquio",
"https://media.themoviedb.org/t/p/w300_and_h450_face/1kzW2GImY1YVmLRx3NLhXFBfLLO.jpg",
"Para evitar a prisão após um racha que terminou em um grave acidente, Sean é forçado a morar com seu pai militar em Tóquio. Deslocado e sem conhecer a cultura, ele logo faz amizade com Twinkie, que o introduz ao submundo das corridas de rua ilegais no Japão."
);

insert into jogos (titulo, imagem, descricao) values
("Free Fire",
"https://m.media-amazon.com/images/M/MV5BMTI3MTE3ZGQtNWJmMi00MTAzLWI2MzYtZTFiMDRkMzU0ZjE0XkEyXkFqcGc@._V1_.jpg",
"O Free Fire é um jogo eletrônico de tiro no estilo Battle Royale desenvolvido pela 111dots Studio e publicado pela Garena. Gratuito e otimizado para celulares, ele coloca até 50 jogadores em uma ilha deserta para lutar pela sobrevivência, restando apenas um vencedor ou esquadrão no final."
),

("Minecraft",
"https://preview.redd.it/went-on-blender-i-made-a-minecraft-poster-v0-8b15yijpcgtc1.png?auto=webp&s=8482143e56f0bd1992defd259ed01ddf7dd016b7",
"Minecraft é um jogo eletrônico de mundo aberto do tipo sandbox, onde os jogadores sobrevivem, exploram e constroem utilizando blocos tridimensionais. Sem um objetivo linear imposto, o título permite total liberdade para minerar recursos, interagir com criaturas, jogar sozinho ou conectar-se com amigos na mesma aventura."
),

("Rocket League",
"https://upload.wikimedia.org/wikipedia/pt/e/e8/Rocket_League.jpg",
"Rocket League é um popular jogo eletrônico que mistura futebol com carros possantes. Desenvolvido pela Psyonix, o objetivo é simples: controlar veículos turbinados para empurrar uma bola gigante até o gol adversário. O título, que é totalmente gratuito, destaca-se pela sua física realista e partidas de ritmo frenético."
),

("Standoff",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vgfrq5bDPgqNmTVqvkOd01ezQCgAuzWSqw&s",
 "Standoff 2 é um popular jogo de tiro em primeira pessoa (FPS) para dispositivos móveis. Frequentemente chamado de Counter-Strike de bolso, o jogo foca em combates táticos de 5 contra 5, destacando-se pela ação rápida, gráficos detalhados, sistemas de ligas competitivas e um amplo mercado de skins e personalizações."
 ),
 
 ("2v2.lol",
 "https://crossyroad2.io/cache/data/image/game/2v2io-f250x250.webp",
 "O 2v2.io é um jogo online gratuito que combina simulador de construção e tiro no estilo Battle Royale. O objetivo é formar equipes, construir estruturas rapidamente e eliminar os adversários para garantir que o seu esquadrão seja o último sobrevivente."
),

("Red Dead Redemption",
"https://upload.wikimedia.org/wikipedia/pt/e/e7/Red_Dead_Redemption_2.png",
"Red Dead Redemption 2 é um jogo de ação e aventura em mundo aberto ambientado em 1899, no crepúsculo do Velho Oeste. A história acompanha Arthur Morgan, um fora-da-lei e membro leal da gangue Van der Linde. Após um assalto frustrado na cidade de Blackwater, o grupo é forçado a fugir de agentes federais e caçadores de recompensa, lidando com o declínio da era dos pistoleiros."
);

insert into series (titulo, imagem, descricao) values
("Peaky Blinders",
"https://media.themoviedb.org/t/p/w300_and_h450_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
"Peaky Blinders acompanha a ascensão implacável da família Shelby e sua gangue, liderada pelo veterano Thomas Shelby. A história se passa na Inglaterra do pós-Primeira Guerra Mundial. De apostas ilegais em Birmingham, os Shelby expandem seus negócios para o mercado internacional, enfrentando máfias e a alta política."
),

("Flash",
"https://media.themoviedb.org/t/p/w300_and_h450_face/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg",
"Barry Allen, um cientista forense que ganha supervelocidade após ser atingido por um raio em meio a uma explosão no S.T.A.R. Labs. Ele usa seus dons para proteger Central City como O Flash, enquanto investiga o misterioso assassinato de sua mãe e tenta provar a inocência de seu pai."
),

("Narcos",
 "https://media.themoviedb.org/t/p/w300_and_h450_face/zzz1KiXWqr8SvqiAb1NmFtnV7Uu.jpg",
 "Narcos é uma série da Netflix que narra a história real e violenta da expansão do tráfico de cocaína entre os anos 1970 e 1990. A trama acompanha a ascensão de grandes cartéis colombianos e os intensos esforços de agentes da DEA (órgão americano de combate às drogas) e das autoridades locais para capturar os criminosos."
),

("The Walking Dead",
"https://media.themoviedb.org/t/p/w300_and_h450_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
"The Walking Dead acompanha um grupo de sobreviventes em um mundo pós-apocalíptico infestado de zumbis (caminhantes). Liderados pelo ex-xerife Rick Grimes, eles lutam não apenas pela sobrevivência contra os mortos-vivos, mas enfrentam constantes conflitos morais e guerras contra outras comunidades humanas hostis ao longo de 11 temporadas."
),

("Caçadores de Trolls",
"https://media.themoviedb.org/t/p/w300_and_h450_face/58dBUuVIpLWN0oeQttbZp6WZpZP.jpg",
 "Caçadores de Trolls (da Netflix/DreamWorks) segue Jim Lake Jr., um adolescente comum que encontra um amuleto mágico e torna-se o primeiro Caçador de Trolls humano. Ele deve equilibrar a vida no ensino médio com a missão de proteger o mundo secreto dos trolls e a cidade de Arcadia contra ameaças malignas."
),

("The Rain",
"https://media.themoviedb.org/t/p/w300_and_h450_face/bBBpi5pgOEZlCOgx2q116oPdJnx.jpg",
 "The Rain é uma série dinamarquesa pós-apocalíptica onde um vírus mortal se espalha pela chuva e dizima quase toda a população da Escandinávia. A história acompanha os irmãos Simone e Rasmus, que passam seis anos isolados em um bunker, antes de saírem para enfrentar um mundo devastado e buscar a cura."
);