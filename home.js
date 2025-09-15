
// // let getData = fetch(" http://www.omdbapi.com/?i=tt3896198&apikey=b722aaba")
// // getData.then((res) => {
// //     return res.json()
// // }).then((data) => {
// // console.log(data);
// // }).catch((err) => {
// //     console.log(err);
// // })


let searchIcon = document.getElementById("searchIcon"); 
let searchInput = document.getElementById("searchInput");
let moviesBtn = document.getElementById("trendingResult");
let resultsDiv = document.getElementById("searchResult");

searchIcon.addEventListener("click", searchData);
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") searchData();
});

function searchData() {
  const query = searchInput.value.trim();
  if (!query) return;

  // remove old script if exists
  const oldScript = document.getElementById("jsonpScript");
  if (oldScript) oldScript.remove();

  // create new JSONP script
  const script = document.createElement("script");
  script.id = "jsonpScript";
  script.src = `https://www.omdbapi.com/?apikey=b722aaba&s=${query}&callback=handleSearch`;
  document.body.appendChild(script);
}

// JSONP callback for search results
function handleSearch(data) {
  displayResults(data);
}

function displayResults(data) {
  resultsDiv.innerHTML = "";

  if (data.Response === "True") {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    data.Search.forEach(movie => {
      // fetch movie details via JSONP
      getMovieDetails(movie.imdbID, favorites);
    });
  } else {
    resultsDiv.innerHTML = `
      <div class="no-result">
        <img src="./assets/page_not_found.jpg" alt="No results found">
        <h2 class="text-center">The movie you are looking for not found !</h2>
      </div>
    `;
  }
}

// request movie details via JSONP
function getMovieDetails(id, favorites) {
  const oldScript = document.getElementById("jsonpDetails_" + id);
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.id = "jsonpDetails_" + id;
  script.src = `https://www.omdbapi.com/?apikey=b722aaba&i=${id}&plot=short&callback=handleDetails`;
  document.body.appendChild(script);

  // store favorites temporarily so handleDetails can use it
  window._favorites = favorites;
}

// JSONP callback for details
function handleDetails(details) {
  const favorites = window._favorites || [];
  const isFav = favorites.some(fav => fav.id === details.imdbID);

  resultsDiv.innerHTML += `
    <div class="card">
      <img src="${details.Poster}" alt="${details.Title} Poster">
      <h3>${details.Title} (${details.Year})</h3>
      <p>Genre : ${details.Genre}</p>
      <p>Rating : ${details.imdbRating}⭐</p>
      <p class="fav-container">
        Add to favorites:
        <i class="fa-${isFav ? "solid" : "regular"} fa-heart fav-icon"
          data-id="${details.imdbID}"
          data-title="${details.Title}"
          data-poster="${details.Poster}"
          data-year="${details.Year}"
          data-genre="${details.Genre}"
          data-rating="${details.imdbRating}">
        </i>
      </p>
    </div>
  `;
}

if (moviesBtn) {
  moviesBtn.addEventListener("click", () => {
    window.location.href = "movie.html";
  });
}

// Favorites handler stays the same
function handleFavorites(container) {
  container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fav-icon")) return;

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const movie = {
      id: (e.target.dataset.id || "").trim(),
      title: e.target.dataset.title,
      poster: e.target.dataset.poster,
      year: e.target.dataset.year,
      genre: e.target.dataset.genre,
      rating: e.target.dataset.rating
    };

    console.log("Clicked movie ID:", movie.id);
    console.log("Current favorites in storage:");
    
    const index = favorites.findIndex(fav => fav.id === movie.id);
    console.log("Index found in favorites:", index);
    if (index === -1) {
      favorites.push(movie);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      e.target.classList.add("added");
      e.target.classList.replace("fa-regular", "fa-solid");
      alert(`${movie.title} added to favorites!`);
    } else {
      favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      e.target.classList.remove("added");
      e.target.classList.replace("fa-solid", "fa-regular");
      alert(`${movie.title} removed from favorites!`);

      if (window.location.pathname.includes("favourite.html")) {
        e.target.closest(".card").remove();
      }
    }
  });
}

handleFavorites(resultsDiv);

