import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from  './components/layout/Navbar';
import About  from './pages/About';
import Home from './pages/Home'
import SingleMovie from './pages/SingleMovie';
import NotFound from './pages/NotFound';


function App() {


  return(
    <Router>
      <div className="flex flex-col relative">
        <Navbar />
        
        <main className='container mx-auto px-4 md:px-0'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/single-movie/:id' element={<SingleMovie />}></Route>
            <Route path='/notfound' element={<NotFound />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
