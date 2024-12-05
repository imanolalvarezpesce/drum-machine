// src/ControlPanel.js
import React from 'react';
import './App.css';

const ControlPanel = ({ currentSound }) => {
  return (
    <div id="display">
      <h1>{currentSound || 'Presiona una tecla'}</h1>
    </div>
  );
};

export default ControlPanel;
