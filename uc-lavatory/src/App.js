import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <div className = "Navbar">
        <a href = "http://localhost:3000/UC-LAvatory"> Home</a>
        <a href = "http://localhost:3000/UC-LAvatory/map"> Map</a>
        <a href = "http://localhost:3000/UC-LAvatory/reviews"> Reviews</a>
      </div>
      <AppRouter />
    </div>
  );
}

export default App;
