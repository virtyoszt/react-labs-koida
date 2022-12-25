import './App.css';
import Data from "./components/Data";
const DATA_URL = 'https://jsonplaceholder.typicode.com/photos';

function App() {
  return (
      <span>
        <h1>https://jsonplaceholder.typicode.com/photos</h1>
        <Data dataUrl={DATA_URL} />
      </span>
  );
}

export default App;
