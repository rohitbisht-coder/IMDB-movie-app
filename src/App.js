import Header from './Components/Header/Header'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import TopRated from './Components/Top-Rated/TopRated'
import Upcoming from './Components/Upcoming/Upcoming'
import Trending from './Components/Trending/Trending'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import Errorpage from './Errorpage'
const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes> 
            <Route path='/' element={<Home/>}/>                                 
            <Route path="movie/:id" element={<MovieDetails/>}/>              
            <Route path='Top-rated' element={<TopRated/>}/>                      
            <Route path='upcoming' element={<Upcoming/>}/>                       
            <Route path='trending' element={<Trending/>}/>                      
            <Route path='*'  element={<Errorpage/>}/>                                
        </Routes>
    </BrowserRouter>
  )
}

export default App
