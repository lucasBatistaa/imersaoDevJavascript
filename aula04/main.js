var listMovies = document.getElementById('listaFilmes')

function addMovie() {
    var urlImage = document.getElementById('filme').value
    var image = `<img src="${urlImage}" />`

    listMovies.innerHTML += image

    document.getElementById('filme').value = ""
}

// https://t.ctcdn.com.br/stxQ-oq7DDFG3Y-tNV1mrKicA-8=/1400x788/smart/i525540.jpeg