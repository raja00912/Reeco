import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Belownav from './components/belownav';
import Searchbar from './components/searchbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Belownav />
      <Searchbar />
    </div>
  );
}

export default App;
