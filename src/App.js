
import './App.css';
import Row from './Row';
import requests from "./requests"

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX Origine" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={ requests.fetchActionMovies} />
    </div>
  );
}

export default App;
