import "./App.css";
import data from "./Data";
import Album from "./components/AlbumItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="playlistContainer">
          <h1>My PlayList</h1>
          {data.map((item) => (
            <Album
              key={item.id}
              albumImage={item.album.images[1].url}
              albumTitle={item.name}
              albumArtist={item.artists[0].name}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
