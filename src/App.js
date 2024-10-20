import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MenuList from './components/MenuList';
import Reservation from './pages/Reservation'
import About from './pages/About'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<MenuList/>}/>
        <Route path="/reservation" element={<Reservation/>}/>
        <Route path='/about.us' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
