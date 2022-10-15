import './css/App.css';
import './css/stamp.css';
import { HEAD } from './components/head/HEAD';
import { Main } from './components/main/Main';
import { Various } from './components/various/Various';

function App() {
  return (
    <div className="App">
      <HEAD/>
      <Main/>
      <Various/>
    </div>
  );
}

export default App;
