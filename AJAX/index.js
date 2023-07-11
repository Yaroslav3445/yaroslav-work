const searchForm = document.getElementById("searchForm");
const searchResults = document.getElementById("searchResults");
let currentPage = 1;

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const movieTitle = document.getElementById("movieTitle").value;
    const movieType = document.getElementById("movieType").value;

    const apiKey = "YOUR_OMDB_API_KEY"; 

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(movieTitle)}&type=${movieType}&page=${currentPage}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.Response === "True") {
                const movies = response.Search;
                let html = "<h2>Search Results:</h2>";
                movies.forEach((movie) => {
                    html += `<div class="movie">
                     <h3>${movie.Title}</h3>
                     <p>Type: ${movie.Type}</p>
                     <p>Year: ${movie.Year}</p>
                     <button class="detailsButton" data-imdbid="${movie.imdbID}">Details</button>
                     <div class="details" id="details_${movie.imdbID}"></div>
                   </div>`;
                });
                searchResults.innerHTML = html;

                const detailsButtons = document.getElementsByClassName("detailsButton");
                for (let i = 0; i < detailsButtons.length; i++) {
                    detailsButtons[i].addEventListener("click", function () {
                        const imdbID = this.getAttribute("data-imdbid");
                        getMovieDetails(imdbID);
                    });
                }
            } else {
                searchResults.innerHTML = "<p>Movie not found!</p>";
            }
        } else {
            searchResults.innerHTML = "<p>An error occurred during the request.</p>";
        }
    };
    xhr.send();
});

function getMovieDetails(imdbID) {
    const apiKey = "YOUR_OMDB_API_KEY"; 

    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            if (response.Response === "True") {
                const detailsContainer = document.getElementById(`details_${imdbID}`);
                const html = `<p>${response.Plot}</p>
                      <p>Director: ${response.Director}</p>
                      <p>Actors: ${response.Actors}</p>`;
                detailsContainer.innerHTML = html;
                detailsContainer.style.display = "block";
            }
        }
    };
    xhr.send();
}