import './App.css';
import ConnectWallet from './components/ConnectWallet';
import Participate from './components/Participate';
import Players from './components/Players';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectWallet />
        <Participate />
        <Players />
      </header>
    </div>
  );
}

export default App;
