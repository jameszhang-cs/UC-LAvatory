import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <div className = "Navbar">
        <a href = "https://jameszhang-cs.github.io/UC-LAvatory/"> Home</a>
        <a href = "https://jameszhang-cs.github.io/UC-LAvatory/map"> Map</a>
        <a href = "https://jameszhang-cs.github.io/UC-LAvatory/reviews"> Reviews</a>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
