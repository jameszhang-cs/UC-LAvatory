import './App.css';
import AppRouter from './components/AppRouter';
import { useEffect } from 'react';
import Axios from 'axios';

const FIVE_MIN_MS=300000;

function App() {
  useEffect(()=> {
    const interval = setInterval(() => {
      Axios.patch("http://localhost:3001/api/reset/pageviews");
    }, FIVE_MIN_MS);
  }, [])
  return (
    <div className="App">
      <div className = "Navbar">
        <a href = "http://localhost:3000"> Home</a>
        <a href = "http://localhost:3000/map"> Map</a>
        <a href = "http://localhost:3000/reviews"> Reviews</a>
        <b>UC-LAvatory</b>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
