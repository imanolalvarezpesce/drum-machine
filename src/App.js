import React, { useState } from 'react';
import './App.css';

function App() {
  const [playingSound, setPlayingSound] = useState(null);

  const sounds = {
    Q: new Audio('sounds/Q.mp3.wav'),
    W: new Audio('sounds/W.mp3.wav'),
    E: new Audio('sounds/E.mp3.wav'),
    A: new Audio('sounds/A.mp3.wav'),
    S: new Audio('sounds/S.mp3.wav'),
    D: new Audio('sounds/D.mp3.wav'),
    Z: new Audio('sounds/Z.mp3.wav'),
    X: new Audio('sounds/X.mp3.wav'),
    C: new Audio('sounds/C.mp3.wav'),
  };

  const handleKeyPress = (event) => {
    const soundKey = event.key.toUpperCase();
    if (sounds[soundKey]) {
      sounds[soundKey].currentTime = 0; // Reinicia el sonido si ya se está reproduciendo
      sounds[soundKey].play();
      setPlayingSound(soundKey); // Muestra qué sonido se está reproduciendo
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress); // Limpia el listener
  }, []);

  return (
    <div className="App">
      <h1>Drum Machine</h1>
      <p>Press a key (Q, W, E, A, S, D, Z, X, C) to play a sound!</p>
      <div className="keyboard">
        {Object.keys(sounds).map((key) => (
          <div
            key={key}
            className={`key ${playingSound === key ? 'active' : ''}`}
            onClick={() => {
              sounds[key].currentTime = 0; // Reinicia el sonido al hacer clic
              sounds[key].play();
              setPlayingSound(key);
            }}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
