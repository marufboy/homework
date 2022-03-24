import "./App.css";
import data from "./Data";
import Album from "./components/AlbumItem";

const albumImage = data.album.images[1].url;
const albumTitle = data.album.name;
const albumArtist = data.album.artists[0].name;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Album
          albumImage={albumImage}
          albumTitle={albumTitle}
          albumArtist={albumArtist}
        />
      </header>
    </div>
  );
}

export default App;
