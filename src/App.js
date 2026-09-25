import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else {
      setAttempts(attempts + 1);

      if (userGuess === randomNumber) {
        setMessage(`Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts`);
      } else if (userGuess < randomNumber) {
        setMessage('Try a higher number.');
      } else {
        setMessage('Try a lower number.');
      }

      if (attempts >= maxAttempts) {
        setMessage(`Game over! The number was ${randomNumber}`);
      }
    }
  };
  return (
    <div>
      <h1>Number Guessing Game</h1>
      <h4>Guess a number between 1 and 100:</h4>
      <input type="text" value={guess} onChange={handleInputChange} /><br></br>
      <button onClick={handleGuess}>Guess</button>
      <h3>{message}</h3>
    </div>
  );
};

export default App;