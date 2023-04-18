import logo from './assets/logo.svg';
import './App.css';
import { ChangeEvent, useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';
import { SavedTrack } from 'spotify-types';
import swal from 'sweetalert';

const AlbumCover = (track: SavedTrack) => {
  const src = track.track.album.images[0]?.url;
  return <img src={src} style={{ width: 400, height: 400 }} />;
};

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [nbGood, setNbGood] = useState(0);
  const [seen, setSeen] = useState(0);

  const [userInput, setUserInput] = useState('');

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

  const currentTrack = tracks?.[trackIndex];

  const goToNextTrack = () => {
    setTrackIndex((trackIndex + 1) % tracks.length);
    setSeen(seen + 1);
    swal('Dommage', 'La répose était : ' + currentTrack?.track.name, 'error');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const goodAnswer = () => {
    swal('Exact !', 'Tu as trouvé la bonne musique !', 'success');
    setTrackIndex((trackIndex + 1) % tracks.length);
    setSeen(seen + 1);
    setNbGood(nbGood + 1);
  };

  const badAnser = () => {
    swal(
      'Perdu !!',
      'Continue de chercher tu vas finir par trouver...',
      'error',
    );
  };

  const checkAnswer = () => {
    if (currentTrack?.track.name.toLowerCase() === userInput.toLowerCase()) {
      goodAnswer();
    } else {
      badAnser();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Blind test</h1>
      </header>
      <div className="App-images">
        <p>Il y a actuellement {tracks.length} titres dans le blind test</p>
        {currentTrack && (
          <>
            <audio src={currentTrack.track.preview_url} autoPlay controls />
          </>
        )}
        <button onClick={goToNextTrack}>Give up</button>
      </div>
      <div>
        {nbGood} titres trouvés sur {seen}
      </div>
      <p>
        Ecris le titre de la musique (attnetion aux majuscules) ! Si ce n'est
        pas bon cela ne fait rien cependant si tu as la bonne réponse tu pourras
        passer à la musique suivante ! Bon courage :)
      </p>
      <input type="text" value={userInput} onChange={handleInputChange} />
      <button onClick={checkAnswer}>Valider</button>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
