import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Players from './Components/Players/Players';


function App() {
  return (
    <div className="App">
      <header>
        <div id="logo">
          <img src={logo} alt=""/>
        </div>
      </header>
      <Players></Players>
    </div>

  );
}


export default App;
