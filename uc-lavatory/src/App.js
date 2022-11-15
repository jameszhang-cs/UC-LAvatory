import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <ul id ='nav-list'>
        <li><a href = "http://localhost:3000/"> Home</a></li>
        <li><a href = "http://localhost:3000/map"> Map</a></li>
        <li><a href = "http://localhost:3000/reviews"> Reviews</a></li>
      </ul>
      <AppRouter />

      
    </div>
  );
}

export default App;
