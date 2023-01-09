import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { SongPage } from './pages/SongPage';


export const RoutesList = () => {
  return (
   <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/song-id" element={<SongPage/>}/>
         <Route path="*" element={<NotFound/>} />
      </Routes>
   </Router>
  )
}
