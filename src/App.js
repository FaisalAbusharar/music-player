import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/Forgetme.mp3"
    },
    {
      title: "On and On",
      artist: "Cartoon, Daniel Levi",
      img_src: "./images/song-2.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "Mad Hatter",
      artist: "Melanie Martinez",
      img_src: "./images/mad.png",
      src: "./music/The Mad Hatter.mp3"
    },
    {
      title: "Rumors",
      artist: "NEFFEX",
      img_src: "./images/NEFFEX.jpg",
      src: "./music/Rum.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
