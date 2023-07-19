import logo from './logo.png';
import './App.css';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
         Star Wars Battle App
        </p> */}
        <Home></Home>
      </header>
    </div>
  );
}

export default App;