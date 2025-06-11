import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <div
      className="App"
      style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="background-gradient" />
      <Header />
      <Main />
    </div>
  );
}

export default App;
