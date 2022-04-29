import BaseStyles from './Views/Assets/BaseStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Views/Layout';

function App() {
  return (
    <Router>
      <BaseStyles />
      <Layout />
    </Router>
  );
}

export default App;
