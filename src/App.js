import { useState } from 'react';
import './App.css';
import Questions from './components/Questions';
import Start from './components/Start';

function App() {
  const [start, setStart] = useState(false);
  const toggleStart = () => {
    setStart(prevState => !prevState)
  }
  return (
    !start ? <Start toggleStart={toggleStart} /> : <Questions />
  );
}

export default App;
