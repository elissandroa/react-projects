import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewPost } from './pages/NewPost';
import { Navbar } from './components/Navbar';
import { Post } from './pages/Post';
import { Admin } from './pages/Admin';
import { EditPost } from './pages/EditPost';


function App() {

  return (
    <div className='container'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewPost />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/edit/:id' element={<EditPost />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
