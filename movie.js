


const trendingMovies = [
  { Title: "Chhaava", Year: 2025, Genre: ["Action", "Drama", "Historical"], imdbRating: 8.2 , Poster:"./assets/chaava.jpg" },
  { Title: "Dragon", Year: 2025, Genre: ["Action", "Fantasy"], imdbRating: 7.5 , Poster:"./assets/dragon.jpg"},
  { Title: "Deva", Year: 2025, Genre: ["Action", "Thriller"], imdbRating: 6.9 ,Poster:"./assets/Deva.jpg"},
  { Title: "Raid 2", Year: 2025, Genre: ["Crime", "Drama", "Thriller"], imdbRating: 8.0 , Poster:"./assets/raid.jpg_large"},
  { Title: "Retro", Year: 2025, Genre: ["Romance", "Action", "Thriller"], imdbRating: 7.1 , Poster:"./assets/retro.jpg"},
  { Title: "The Diplomat", Year: 2025, Genre: ["Political", "Thriller"], imdbRating: 7.8 , Poster:"./assets/the_deplomat.jpg" },
  { Title: "L2: Empuraan", Year: 2025, Genre: ["Action", "Thriller"], imdbRating: 8.4 , Poster:"./assets/empuraan.jpg" },
  { Title: "Sitaare Zameen Par", Year: 2025, Genre: ["Drama", "Family"], imdbRating: 7.3 , Poster:"./assets/sitare_jamin_par.jpg" },
  { Title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh", Year: 2025, Genre: ["Historical", "Drama"], imdbRating: 7.6 , Poster:"./assets/Kesari_Chapter2.jpg" },
  { Title: "VidaaMuyarchi", Year: 2025, Genre: ["Action", "Thriller"], imdbRating: 7.2 , Poster:"./assets/VidaaMuyarchi.jpg" },
  { Title: "Mission: Impossible – The Final Reckoning", Year: 2025, Genre: ["Action", "Thriller"], imdbRating: 8.5 , Poster:"./assets/mission_impossible.jpg" },
  { Title: "F1", Year: 2025, Genre: ["Action", "Drama", "Sports"], imdbRating: 7.7 , Poster:"./assets/f1.jpg" },
  { Title: "Jurassic World: Rebirth", Year: 2025, Genre: ["Action", "Adventure", "Sci-Fi"], imdbRating: 8.1 , Poster:"./assets/jurassic_world.jpg" },
  { Title: "Saiyaara", Year: 2025, Genre: ["Romance", "Drama"], imdbRating: 7.0 , Poster:"./assets/saiyaara.jpg" },
  { Title: "Mahavatar Narsimha", Year: 2025, Genre: ["Animation", "Mythology"], imdbRating: 8.3  , Poster:"./assets/mahavatar_narsimha.jpeg" },
  { Title: "Deadpool & Wolverine", Year: 2024, Genre: ["Action", "Comedy", "Superhero"], imdbRating: 8.7, Poster:"./assets/deadpool_wolverine.jpeg" },
  { Title: "Inside Out 2", Year: 2024, Genre: ["Animation", "Comedy", "Family"], imdbRating: 8.0 , Poster:"./assets/inside_out2.jpg" },
  { Title: "Dune: Part Two", Year: 2024, Genre: ["Sci-Fi", "Adventure", "Drama"], imdbRating: 8.6 , Poster:"./assets/dune2.jpg" },
  { Title: "Oppenheimer", Year: 2023, Genre: ["Biography", "Drama", "History"], imdbRating: 9.0 , Poster:"./assets/oppenheimer.jpg" },
  { Title: "Barbie", Year: 2023, Genre: ["Comedy", "Fantasy"], imdbRating: 7.4 , Poster:"./assets/barbie.jpg" }
];

let moviesDiv = document.getElementById("trendingMovie");

function displayTrendingMovies() {
  moviesDiv.innerHTML = "";
  trendingMovies.forEach(movie => {
    moviesDiv.innerHTML += `
      <div class="card">
        <img src="${movie.Poster}" alt="${movie.Title} Poster">
        <h3>${movie.Title} (${movie.Year})</h3>
        <p>Genre : ${movie.Genre.join(", ")}</p>
        <p>Rating : ${movie.imdbRating}⭐</p>
      </div>
    `;
  } );
}
displayTrendingMovies();