import logo from './logo.svg';
import './App.css';

function App() {
  const b = false;
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kim's big bad app
        </p>
        {b ? <p>balls</p> : <p>nuts</p>}
      </header>
    </div>
  );
}

export default App;
