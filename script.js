// document.getElementById = pega pelo id
// document.querySelector('.classe') = pega por classe, mas o primeiro elemento apenas
// document.querySelectorAll('.classe') = pega por classe mas todos os elementos da classe
const searchInput = document.getElementById("search-input");
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`; //retorna apenas o que corresponde ao termo digitado
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result));
}

function displayResults(result) {
  resultPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");

  result.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    //quando nao há nada digitado na busca, as playlists se ocultam
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return; //para parar a execução
  }
  requestApi(searchTerm);
});
