import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Pages/Home';
import LoginPage from './components/Pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route element={<LoginPage />} path='/'/>
         <Route element={<Home />} path='/dashboard'/>
      </Routes>
    </Router>
  )
}

export default App