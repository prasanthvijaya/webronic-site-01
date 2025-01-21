import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  // Change to HashRouter
import Home from './pages/Home';
import ContactForm from './components/HomeComponents/ContactForm';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/ContactForm' element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
