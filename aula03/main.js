var movies = [
    "https://th.bing.com/th/id/OIP.ClLDU4-zGATUM0Ga6iMS8AHaFj?w=203&h=180&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.Bjq3d4nHBXEYnMiZOtQsIgHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.Vi-n8IVEJ2ewrjJjmHbajgHaK-?w=185&h=274&c=7&r=0&o=5&pid=1.7"
]

movies.forEach(movie => {
    document.write(`<img src="${movie}" class="posters"/>`)
    console.log(movie)
});
