import Wrapper from './Wrapper';
import Nav from './header/Nav'
import ApiContext from '../src/hooks/ApiContext';

function App() {
  return (
    <div className="App">
      <ApiContext>
      <Wrapper/>
      </ApiContext>
    </div>
  );
}

export default App;
