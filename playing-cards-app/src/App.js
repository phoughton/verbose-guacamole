import React, { useState } from 'react';
import './App.css';

const suits = ['♥', '♦', '♣', '♠'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function App() {
  const [selectedSuit, setSelectedSuit] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [choices, setChoices] = useState('');
  const [summary, setSummary] = useState('');
  const [resultsSummary, setResultsSummary] = useState('');
  const [score, setScore] = useState('');
  const [isCrib, setIsCrib] = useState(false);

  const handleSuitButtonClick = (suit) => {
    setSelectedSuit(suit);
    setChoices(`${selectedRank} ${suit}`);
  };

  const handleRankButtonClick = (rank) => {
    setSelectedRank(rank);
    setChoices(`${rank} ${selectedSuit}`);
  };

  const clearChoices = () => {
    setSelectedSuit('');
    setSelectedRank('');
    setChoices('');
  };

  const addToSummary = () => {
    setSummary(`${summary}${choices}\n`);
  };

  const clearSummary = () => {
    setSummary('');
  };

  const handleSubmit = () => {
    setResultsSummary(summary);
  };

  const makeStartCard = () => {
    setChoices(`Start: ${choices}`);
    setSummary(`Start: ${summary}${choices}\n`);
  };

  const clearAll = () => {
    clearChoices();
    clearSummary();
    setResultsSummary('');
    setScore('');
  };

  return (
    <div className="App">
      <h1>Playing Cards</h1>
      <h2>Select a rank:</h2>
      <div className="ranks">
        {ranks.map((rank) => (
          <button key={rank} onClick={() => handleRankButtonClick(rank)}>
            {rank}
          </button>
        ))}
      </div>
      <h2>Select a suit:</h2>
      <div className="suits">
        {suits.map((suit) => (
          <button
            key={suit}
            className={`suit ${suit === '♥' ? 'heart' : suit === '♦' ? 'diamond' : ''}`}
            onClick={() => handleSuitButtonClick(suit)}
          >
            {suit}
          </button>
        ))}
      </div>
      <div className="section-container">
        <h2>Chosen Card:</h2>
        <div className="choices">
          <textarea value={choices} readOnly rows="3" cols="12" className="big-text" />
          <div className="choices-buttons">
            <button onClick={clearChoices}>Clear</button>
            <button onClick={addToSummary}>Add</button>
            <button onClick={makeStartCard}>Make 'Start' Card</button>
          </div>
        </div>
      </div>
      <div className="section-container">
        <h2>Your Hand of Cards:</h2>
        <div className="summary">
          <textarea value={summary} readOnly rows="6" className="big-text" />
          <div className="summary-buttons">
            <button onClick={clearSummary}>Clear</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="crib-checkbox">
          <input
              type="checkbox"
              checked={isCrib}
              onChange={() => setIsCrib(!isCrib)}
            />
            <label>Crib</label>
          </div>
        </div>
        <div className="section-container">
          <h2>Results Summary:</h2>
          <textarea value={resultsSummary} readOnly rows="8" cols="25" className="big-text" />
        </div>
        <div className="section-container">
          <h2>Score:</h2>
          <input
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="big-text"
            style={{ fontSize: '1.5rem', width: '8rem' }}
          />
        </div>
        <div className="section-container">
          <button onClick={clearAll}>Clear All</button>
        </div>
      </div>
    );
  }
  
  export default App;
  