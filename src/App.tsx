import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';

const AlbumCover = (track: SavedTrack) => {
  const src = track.track.album.images[0]?.url;
  return <img src={src} style={{ width: 400, height: 400 }} />;
};

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const {
    data: tracks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  console.log(tracks);
  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  const name0 = tracks?.[0];
  const goToNextTrack = () => {
    setTrackIndex((trackIndex + 1) % tracks.length);
  };

  const currentTrack = tracks?.[trackIndex];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur le blind test</h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
        <p>Il y a actuellement {tracks.length} titres dans le blind test</p>
        {name0 ? (
          <p>Titre de la première musique : {name0.track.name}</p>
        ) : (
          <div>No tracks</div>
        )}
        {currentTrack && (
          <>
            <audio src={currentTrack.track.preview_url} autoPlay controls />
          </>
        )}
        <button onClick={goToNextTrack}>Next track</button>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
