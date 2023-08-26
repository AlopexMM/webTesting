import './App.css';
import Navbar from './components/Navbar';
import Presentation from './components/Presentation';
import Carrousel from './components/Carrousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Carrousel />
    </div>
  );
}

export default App;
