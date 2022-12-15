import logo from './logo.svg';
import './App.css';
import useFetchData from './hooks/useFetchData'

function App() {
  const data = useFetchData()
  return (
    <div className="App">
      <h2> Data Header </h2>
      { data.map((trendObject, index) => <div key={index}>{trendObject.name}</div>) }
      <h2> Data Footer </h2>
      {/*<header className="App-header">
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
        </a>
  </header> */}
    </div>
  );
}

export default App;
