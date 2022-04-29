import './Views/Assets/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './Views/Index';

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
