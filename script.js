// Array com informações dos filmes
const filmes = [
    { imagem: "castelo-no-ceu.jpg" },
    { imagem: "chiriro.jpg" },
    { imagem: "nausicaa.jpg" },
    { imagem: "totoro.jpg" },
    { imagem: "tumulo-dos-vagalumes.jpg" },
    { imagem: "kiki.jpg" },
    { imagem: "memorias-de-ontem.jpg" },
    { imagem: "porco-rosso.jpg" },
    { imagem: "eu-posso-ouvir-o-oceano.jpg" },
    { imagem: "pom-poko.jpg" },
    { imagem: "sussurros.jpg" },
    { imagem: "mononoke.jpg" },
    { imagem: "yamadas.jpg" },
    { imagem: "reino-dos-gatos.jpg" },
    { imagem: "castelo-animado.jpg" },
    { imagem: "terramar.jpg" },
    { imagem: "ponyo.jpg" },
    { imagem: "mundo-dos-pequeninos.jpg" },
    { imagem: "colina-kokuriko.jpg" },
    { imagem: "vidas-ao-vento.jpg" },
    { imagem: "kaguya.jpg" },
    { imagem: "mernie.jpg" },
    { imagem: "tartaruga-vermelha.jpg" },
    { imagem: "aya-e-a-bruxa.jpg" },
    { imagem: "menino-e-a-garca.jpg" },
];

// Função para sortear um filme e exibir suas informações
function sortearFilme() {
    const indiceAleatorio = Math.floor(Math.random() * filmes.length);
    const filmeSorteado = filmes[indiceAleatorio];

    // Encontrar o elemento HTML onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado');

    // Atualizar o conteúdo do elemento
    resultadoDiv.innerHTML = `
        <img src="${filmeSorteado.imagem}" alt="${filmeSorteado.titulo}">
    `;
}
 