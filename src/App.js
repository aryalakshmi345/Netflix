import './App.css';
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending In India" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}
export default App;
