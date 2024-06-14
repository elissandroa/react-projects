import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';
import { Navbar } from './components/Navbar';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
