import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home';
import ContactForm from './components/HomeComponents/ContactForm';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navigate to='/home'/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='blog' element={<Blog/>}></Route>
      <Route path='ContactForm' element={<ContactForm/>}></Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
