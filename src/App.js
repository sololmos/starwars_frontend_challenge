import logo from './logo.png';
import './App.css';
//import Home from './components/home/Home';
import Home1 from './components/home1/Home1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        

        <img src={logo} className="App-logo" alt="logo" />
        

        <Home1></Home1>
        {/* <Home></Home> */}


      </header>
    </div>
  );
}

export default App;