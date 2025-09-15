// let searchIcon = document.getElementById("searchIcon"); 
// let searchInput = document.getElementById("searchInput");
// let moviesBtn = document.getElementById("trendingResult");



// searchIcon.addEventListener("click" , searchData);
// searchInput.addEventListener("keyup" , (e)=>{
//     if(e.key === "Enter") searchData();
// });




// function searchData(){
//     const query = searchInput.value.trim();
//     if(!query) return;

//     const url = `http://www.omdbapi.com/?apikey=b722aaba&s=${query}`

//     fetch(url)
//     .then(res=>res.json())
//     // .then(data=>console.log(data))
//     .then(data=>displayResults(data))
//     .catch(err=>console.error(err))
// }


// let resultsDiv = document.getElementById("searchResult");

// function displayResults(data) {
//   resultsDiv.innerHTML = "";

//   if (data.Response === "True") {
//     // get favorites from localStorage once
//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//     data.Search.forEach(movie => {
//       // second API call for details (with Plot)
//       fetch(`http://www.omdbapi.com/?apikey=b722aaba&i=${movie.imdbID}&plot=short`)
//         .then(res => res.json())
//         .then(details => {
//           // check if movie already in favorites
//           const isFav = favorites.some(fav => fav.id === details.imdbID);

//           resultsDiv.innerHTML += `
//             <div class="card" >
//               <img src="${details.Poster}" alt="${details.Title} Poster">
//               <h3>${details.Title} (${details.Year})</h3>
//               <p>Genre : ${details.Genre}</p>
//               <p>Rating : ${details.imdbRating}⭐</p>
//               <p class="fav-container">
//                 Add to favorites:
//                 <i class="fa-${isFav ? "solid" : "regular"} fa-heart fav-icon"
//                   data-id="${details.imdbID}"
//                   data-title="${details.Title}"
//                   data-poster="${details.Poster}"
//                   data-year="${details.Year}"
//                   data-genre="${details.Genre}"
//                   data-rating="${details.imdbRating}">
//                 </i>
//               </p>
//             </div>
//           `;
//         })
//         .catch(err => console.error(err));
//     });
//   } else {
//     resultsDiv.innerHTML = `
//       <div class="no-result">
//         <img src="./assets/page_not_found.jpg" alt="No results found">
//         <h2 class="text-center">The movie you are looking for not found !</h2>
//       </div>
//     `;
//   }
// }

// if (moviesBtn) {
//   moviesBtn.addEventListener("click", () => {
//     window.location.href = "movie.html";
//   });
// }



// function handleFavorites(container) {
//   container.addEventListener("click", (e) => {
//     if (!e.target.classList.contains("fav-icon")) return;

//     let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

//     // get all details from data-* attributes
//     const movie = {
//       id: (e.target.dataset.id || "").trim(),
//       title: e.target.dataset.title,
//       poster: e.target.dataset.poster,
//       year: e.target.dataset.year,
//       genre: e.target.dataset.genre,
//       rating: e.target.dataset.rating
//     };

//     // check if already exists
//     const index = favorites.findIndex(fav => fav.id === movie.id);

//     if (index === -1) {
//       // Add to favorites
//       favorites.push(movie);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       e.target.classList.add("added");
//       e.target.classList.replace("fa-regular", "fa-solid"); // change icon
//       alert(`${movie.title} added to favorites!`);
//     } else {
//       // Remove from favorites
//       favorites.splice(index, 1);
//       localStorage.setItem("favorites", JSON.stringify(favorites));
//       e.target.classList.remove("added");
//       e.target.classList.replace("fa-solid", "fa-regular"); // back to outline
//       alert(`${movie.title} removed from favorites!`);

//       // if you’re on favourite.html, also remove card from DOM
//       if (window.location.pathname.includes("favourite.html")) {
//         e.target.closest(".card").remove();
//       }
//     }
//   });
// }





// handleFavorites(resultsDiv);