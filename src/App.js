import './App.css';
import data from './Data';

const albumImage = data.album.images[1].url;
const albumTitle = data.album.name;
const albumArtist = data.album.artists[0].name;

const Album = () => (
  <div className="newHeader">
    <div className="headerLogo">
      <img className="logo" src={albumImage} alt="Logo" />
    </div>
    <div className="headerDesc">
      <h1>{albumTitle}</h1>
      <p>Artist : {albumArtist}</p>
      <button class="btnSelect">
        Select
      </button>
    </div>
  </div>
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Album />
      </header>
    </div>
  );
}

export default App;
