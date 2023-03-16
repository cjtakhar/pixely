import { 
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home';
import Pricing from './components/pricing';
import './App.css';

function App() {
  return (
    <div className="App">
     < BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>< Home /></h1>} />
          <Route path="/pricing" element={ < Pricing />}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
