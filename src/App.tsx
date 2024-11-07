import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route element={<Home />} path='/'/>
      </Routes>
    </Router>
  )
}

export default App