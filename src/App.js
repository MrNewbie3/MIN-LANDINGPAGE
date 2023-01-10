import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Introduction from './Pages/Introduction';
import PpdbApps from './Pages/PpdbApps';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Introduction />} />
        <Route path='/ppdbapps' element={< PpdbApps />} />
      </Routes>
    </Router>
  );
}

export default App;
