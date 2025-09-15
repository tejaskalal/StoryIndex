const favDiv = document.getElementById("favoritesDiv");
let storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];

// Render favorites
function renderFavorites() {
  favDiv.innerHTML = "";

  if (storedFavs.length === 0) {
    favDiv.innerHTML = `<h4 style="margin:auto"> No movies added yet!</h4><br><br><br>`;
    return;
  }

  storedFavs.forEach(movie => {
    favDiv.innerHTML += `
      <div class="card">
        <img src="${movie.poster}" alt="${movie.title} Poster">
        <h3>${movie.title} (${movie.year})</h3>
        <p>Genre : ${movie.genre}</p>
        <p>Rating : ${movie.rating}⭐</p>
        <p class="fav-container">
          <i class="fa-solid fa-heart fav-icon" data-id="${movie.id}"></i>
        </p>
      </div>
    `;
  });

  // Attach click handler for remove
  handleFavorites(favDiv);
}

// Remove from favorites handler
function handleFavorites(container) {
  container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fav-icon")) return;

    const movieId = e.target.dataset.id;

    // Find index and remove
    const index = storedFavs.findIndex(fav => fav.id === movieId);
    if (index !== -1) {
      const removed = storedFavs.splice(index, 1)[0];
      localStorage.setItem("favorites", JSON.stringify(storedFavs));
      e.target.closest(".card").remove();
      alert(`${removed.title} removed from favorites!`);
    }

    // If no movies left, show message
    if (storedFavs.length === 0) {
      favDiv.innerHTML = `<h4 style="margin:auto"> No movies added yet!</h4><br><br><br>`;
    }
  });
}

// Initial render
renderFavorites();
