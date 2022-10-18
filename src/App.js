import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailAnime from './pages/detail';
import ListAnime from './pages/list';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<ListAnime />} />
      <Route exact path='/:id' element={<DetailAnime />} />
    </Routes>
  );
}

export default App;
