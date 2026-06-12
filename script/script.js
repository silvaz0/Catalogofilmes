const filmes = [{
    titulo: "Mortal Kombat",
    imagem: "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    descricao: "O lutador de MMA Cole Young é caçado pelo imperador da Exoterra, Shang Tsung, e seu guerreiro Sub-Zero. Para proteger sua família e salvar o mundo, Cole busca Lorde Raiden e junta-se aos maiores campeões da Terra no sangrento torneio interdimensional, o Mortal Kombat.",
},
{
    titulo: "Batman",
    imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "O filme Batman (2022) foca no segundo ano de Bruce Wayne como o vigilante de Gotham. Quando um serial killer conhecido como Charada assassina a elite da cidade, o herói é forçado a mergulhar no submundo criminal, descobrindo uma teia de corrupção que envolve até mesmo o passado de sua própria família"
},
{
    titulo: "Homem-Aranha",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "Ao ser picado por uma aranha geneticamente modificada em uma demonstração científica, o jovem nerd Peter Parker ganha superpoderes. Inicialmente, ele pretende usá-los para ganhar dinheiro, adotando o nome de Homem-Aranha e se apresentando em lutas de exibição. Porém, ao presenciar o assassinato de seu tio Ben e sentir-se culpado, Peter decide não mais usar seus poderes para proveito próprio e sim para enfrentar o mal, tendo como seu primeiro grande desafio o psicótico Duende Verde.",
},
{
    titulo: "Doutor Estranho",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/pb4clPWRJ5AKlSFu1HrrHdt5uAw.jpg",
    descricao: "O neurocirurgião Stephen Strange sofre um acidente de carro que incapacita suas mãos. Buscando a cura, ele chega ao templo de Kamar-Taj, onde descobre o mundo das artes místicas e dimensões alternativas. Ele se torna um Mago Supremo, defendendo a Terra de ameaças místicas."
},
{
    titulo: "Interestelar",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
    descricao: "Em um futuro onde a Terra está morrendo devido a colheitas fracassadas e tempestades de poeira, a humanidade enfrenta a extinção. Para salvar a espécie, o ex-piloto Cooper é convocado pela NASA para liderar uma missão espacial através de um buraco de minhoca, na busca por um novo planeta habitável."
},
{
    titulo: "Velozes e Furiosos Desafio em Tóquio",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1kzW2GImY1YVmLRx3NLhXFBfLLO.jpg",
    descricao: "Para evitar a prisão após um racha que terminou em um grave acidente, Sean é forçado a morar com seu pai militar em Tóquio. Deslocado e sem conhecer a cultura, ele logo faz amizade com Twinkie, que o introduz ao submundo das corridas de rua ilegais no Japão."
}
]

 const listarFilmes = document.getElementById("listarFilmes");
 
 function mostrarFilmes(lista) {
    listarFilmes.innerHTML = ""
    lista.forEach(filme => {
       listarFilmes.innerHTML += `
       <div class="col-md-4">
            <div class="card card-filme h-100">
            <img src="${filme.imagem}" class="card-img-top">
            <div class="card-body">
                <h3>${filme.titulo}</h3>
                <p>${filme.descricao}</p>
                <button class="btn-dark text-white" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
                </div>
                </div>
            </div>
       ` 
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        títle: titulo,
        Text: "Mais informações do filme",
        icon: "info"
    })
}