import { Route, Routes } from 'react-router-dom'

import Blog from './components/Blog'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
import BlogCreate from './components/BlogCreate'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/create' element={<BlogCreate />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
