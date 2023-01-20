import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Resume from './components/Resume';
import Edit from './setting/Edit';
import Editor from './setting/Editor';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
        <Route path='/editor' element={<Editor />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
