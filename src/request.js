const API_KEY = "1c7590a410abe74eabd63f98034b6ea1";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflexOriginals: `/discover/tv?api_key=${API_KEY}&width_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default request;
