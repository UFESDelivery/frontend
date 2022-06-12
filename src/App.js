// import BaseStyles from './Views/Assets/BaseStyles';
import './Components/Assets/BaseStyles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Components/Layout';

function App() {

  return (
    <Router>
      {/* <BaseStyles /> */}
      <Layout />
    </Router>
  );
}

export default App;
