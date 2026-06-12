const séries = [{
    titulo: "Peaky Blinders",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
    descricao: "Peaky Blinders acompanha a ascensão implacável da família Shelby e sua gangue, liderada pelo veterano Thomas Shelby. A história se passa na Inglaterra do pós-Primeira Guerra Mundial. De apostas ilegais em Birmingham, os Shelby expandem seus negócios para o mercado internacional, enfrentando máfias e a alta política."
},
{
    titulo: "Flash",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/lFxIoMKqkgTuxpghTPHBjoVstMV.jpg",
    descricao: "Barry Allen, um cientista forense que ganha supervelocidade após ser atingido por um raio em meio a uma explosão no S.T.A.R. Labs. Ele usa seus dons para proteger Central City como O Flash, enquanto investiga o misterioso assassinato de sua mãe e tenta provar a inocência de seu pai."
},
{
    titulo: "Narcos",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/zzz1KiXWqr8SvqiAb1NmFtnV7Uu.jpg",
    descricao: "Narcos é uma série da Netflix que narra a história real e violenta da expansão do tráfico de cocaína entre os anos 1970 e 1990. A trama acompanha a ascensão de grandes cartéis colombianos e os intensos esforços de agentes da DEA (órgão americano de combate às drogas) e das autoridades locais para capturar os criminosos."
}, 
{
    titulo: "The Walking Dead",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9lb02gTh4LLB17yAEXFd4C3R4JP.jpg",
    descricao: "The Walking Dead acompanha um grupo de sobreviventes em um mundo pós-apocalíptico infestado de zumbis (caminhantes). Liderados pelo ex-xerife Rick Grimes, eles lutam não apenas pela sobrevivência contra os mortos-vivos, mas enfrentam constantes conflitos morais e guerras contra outras comunidades humanas hostis ao longo de 11 temporadas."
},
{
    titulo: "Caçadores de Trolls",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/58dBUuVIpLWN0oeQttbZp6WZpZP.jpg",
    descricao: "Caçadores de Trolls (da Netflix/DreamWorks) segue Jim Lake Jr., um adolescente comum que encontra um amuleto mágico e torna-se o primeiro Caçador de Trolls humano. Ele deve equilibrar a vida no ensino médio com a missão de proteger o mundo secreto dos trolls e a cidade de Arcadia contra ameaças malignas."
},
{
    titulo: "The Rain",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/bBBpi5pgOEZlCOgx2q116oPdJnx.jpg",
    descricao: "The Rain é uma série dinamarquesa pós-apocalíptica onde um vírus mortal se espalha pela chuva e dizima quase toda a população da Escandinávia. A história acompanha os irmãos Simone e Rasmus, que passam seis anos isolados em um bunker, antes de saírem para enfrentar um mundo devastado e buscar a cura."
}
]

 const listaSéries = document.getElementById("listaSéries");
 
 function mostrarSéries(lista) {
    listaSéries.innerHTML = ""
    lista.forEach(série => {
       listaSéries.innerHTML += `
       <div class="col-md-4">
            <div class="card card-série h-100">
            <img src="${série.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${série.titulo}</h3>
                <p>${série.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${série.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarSéries(séries)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações da série",
        icon: "info"
    })
}