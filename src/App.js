import './App.css';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';

function App() {
  return (
    <div className="App p-3">
      <div className="container d-flex justify-content-center gap-4 flex-wrap flex-row p-3 bg-color">
      <First />
      <Second />
      <Third />
      </div>
    </div>
  );
}

export default App;