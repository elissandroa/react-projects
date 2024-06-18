import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';
import { Navbar } from './components/Navbar';
import { Post } from './pages/Post';


function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewPost />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
