import logo from './logo.svg';
import './App.css';
import config from './config/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Learn React (Deploy Test)
          <div>BaseURL: {config.baseURL}</div>
        </a>
      </header>
    </div>
  );
}

export default App;
