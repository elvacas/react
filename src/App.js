import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <h1>Cock and Lion</h1>
      <Navbar />
      <ItemListContainer greeting='Bienvenido a Cock and Lion'/>
    </div>
  );
}

export default App;
