const movieList = [
  {
    imdbID: "tt6155172",
    title: "Roma",
    year: "2018",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
    imdbRating: 7.7,
    runtime: 135,
    userRating: 6,
  },
  {
    imdbID: "tt6155172",
    title: "Roma",
    year: "2018",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_SX300.jpg",
    imdbRating: 7.7,
    runtime: 135,
    userRating: 9,
  },
];

const uniqueMovies = {};
const uniqueMovieList0 = [];

for (let i = movieList.length - 1; i >= 0; i--) {
  const movie = movieList[i];
  if (!uniqueMovies[movie.imdbID]) {
    uniqueMovies[movie.imdbID] = true;
    uniqueMovieList0.unshift(movie); // Add the last unique movie to the beginning of the list
  }
}

console.log(uniqueMovieList0);

// Create an object to keep track of unique items based on imdbID
const uniqueItems = {};

// Use filter to get only one unique item based on imdbID
const uniqueMovieList = movieList.filter((movie) => {
  if (!uniqueItems[movie.imdbID]) {
    // If the imdbID is not in uniqueItems, add it and return true to include this item
    uniqueItems[movie.imdbID] = true;
    return true;
  }
  // If the imdbID is already in uniqueItems, return false to exclude this item
  return false;
});

console.log(uniqueMovieList);
