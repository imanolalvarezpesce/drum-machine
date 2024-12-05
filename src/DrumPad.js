// src/DrumPad.js
import React from 'react';
import './App.css';

const DrumPad = ({ sound, handlePlaySound }) => {
  const playSound = () => {
    const audio = new Audio(sound.url);
    audio.play();
    handlePlaySound(sound.sound);
  };

  return (
    <button className="drum-pad" id={sound.sound} onClick={playSound}>
      {sound.key}
    </button>
  );
};

export default DrumPad;
