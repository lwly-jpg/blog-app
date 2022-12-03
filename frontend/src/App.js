import './App.css';
import Navbar from './Nav';
import Home from './Home';

function App() {
  const title = "Blog"
  const likes = 50

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
