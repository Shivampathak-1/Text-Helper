import './App.css';
import Navbar from './componenets/Navbar';
import Textform from './componenets/Textform';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container my-3">
        <Textform heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
