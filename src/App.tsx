import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <div
      className="App"
      style={{ position: 'relative', minHeight: '100vh' }}>
      <div className="background-gradient" />
      <Header />
    </div>
  );
}

export default App;
