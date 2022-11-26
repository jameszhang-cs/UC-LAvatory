import './App.css';
import AppRouter from './components/AppRouter';

function App() {
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
