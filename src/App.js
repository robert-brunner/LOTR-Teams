import logo from './logo.svg';
import './App.css';
import { CurrentCharacterItem } from './components/characters/characterItem';
import { InfoList } from './components/society/apiList';

function App() {
  return (
    <div className="App">
      <CurrentCharacterItem/>
      <InfoList/>
    </div>
  );
}

export default App;
