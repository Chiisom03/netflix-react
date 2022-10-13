const apiKey = "c3e3b715db7ed78cea000e0969eda5d5";
// const apiKey = process.env.MOVIE_API_KEY;

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language-en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language-en-US&page=1`,
  requestPopulaTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language-en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/keyword?api_key=${apiKey}&query=horror&language-en-US&page=1`,
  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language-en-US&page=1`,
};
export default requests;
