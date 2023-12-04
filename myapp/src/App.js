import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Belownav from './components/belownav';
import Searchbar from './components/searchbar';
import Productpage from './components/productpage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Belownav />
      <Searchbar />
      <Productpage />
    </div>
  );
}

export default App;
