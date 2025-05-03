// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getFilteredDirectors(moviesArray) {
  return getAllDirectors(moviesArray).filter(
    (element, index, arr) => arr.indexOf(element) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesDrama = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return moviesDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  const allScores = moviesArray.reduce(
    (acc, value) => (value.score ? (acc += value.score) : acc),
    0
  );
  return Number((allScores / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const filteredMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (!filteredMovies.length) return 0;
  const allDramaScores = filteredMovies.reduce(
    (acc, value) => (value.score ? (acc += value.score) : acc),
    0
  );
  return Number((allDramaScores / filteredMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const mooviesArrCopy = [...moviesArray];

  return mooviesArrCopy
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .sort((a, b) => a.year - b.year);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const mooviesArrCopy = [...moviesArray];

  return mooviesArrCopy
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  function convertDurationToMinutes(duration) {
    let hours = 0;
    let minutes = 0;

    const parts = duration.split(" ");
    parts.forEach((part) => {
      if (part.includes("h")) {
        hours = parseInt(part.replace("h", ""));
      } else if (part.includes("min")) {
        minutes = parseInt(part.replace("min", ""));
      }
    });

    return hours * 60 + minutes;
  }

  return moviesArray.map((movie) => ({
    ...movie,
    duration: convertDurationToMinutes(movie.duration),
  }));
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  const yearScores = {};

  movies.forEach((movie) => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = { totalScore: 0, count: 0 };
    }
    yearScores[movie.year].totalScore += movie.score || 0;
    yearScores[movie.year].count++;
  });

  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearScores) {
    const avgScore = yearScores[year].totalScore / yearScores[year].count;
    if (avgScore > bestAvg || (avgScore === bestAvg && year < bestYear)) {
      bestAvg = avgScore;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
