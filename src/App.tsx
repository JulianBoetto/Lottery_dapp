import './App.css';
import ConnectWallet from './components/ConnectWallet';
import Footer from './components/Footer';
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
      <footer className="Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
