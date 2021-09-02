import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
  <>
  <Navbar title = "Textra" aboutText = "About Us"/>
  <div className="container my-3">
    <Textform heading="Enter the text to analyse."/>
  </div>
  </>
  );
}

export default App;
