import React, { useState } from 'react';
import './App.css';

// Define the suits and ranks arrays
const suits = ['♥', '♦', '♣', '♠'];
const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

function App() {
  // State to hold the selected suit and rank, choices, summary, and test area results
  const [selectedSuit, setSelectedSuit] = useState('');
  const [selectedRank, setSelectedRank] = useState('');
  const [choices, setChoices] = useState('');
  const [summary, setSummary] = useState('');
  const [testAreaResults, setTestAreaResults] = useState('');

  // Function to handle suit button click
  const handleSuitButtonClick = (suit) => {
    setSelectedSuit(suit);
    setChoices(`${selectedRank} ${suit}`);
  };

  // Function to handle rank button click
  const handleRankButtonClick = (rank) => {
    setSelectedRank(rank);
    setChoices(`${rank} ${selectedSuit}`);
  };

  // Function to clear choices text box
  const clearChoices = () => {
    setSelectedSuit('');
    setSelectedRank('');
    setChoices('');
  };

  // Function to add the chosen suit and rank to the summary text box
  const addToSummary = () => {
    setSummary(`${summary}${choices}\n`);
  };

  // Function to handle submit button click
  const handleSubmit = () => {
    setTestAreaResults(summary);
  };

  return (
    <div className="App">
      <h1>Playing Cards</h1>
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
      <h2>Select a rank:</h2>
      <div className="ranks">
        {ranks.map((rank) => (
          <button key={rank} onClick={() => handleRankButtonClick(rank)}>
            {rank}
          </button>
        ))}
      </div>
      <div>
        <h2>Chosen Suit and Rank:</h2>
        <textarea value={choices} readOnly />
        <button onClick={clearChoices}>Clear</button>
        <button onClick={addToSummary}>Add</button>
      </div>
      <div>
        <h2>Summary:</h2>
        <textarea value={summary} readOnly />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        <h2>Test Area:</h2>
        <textarea value={testAreaResults} readOnly />
      </div>
    </div>
  );
}

export default App;
