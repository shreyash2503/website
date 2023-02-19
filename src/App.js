import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import { Routes, Route } from 'react-router-dom';
import CardPage from './components/CardPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Events />}></Route>
      <Route path='/cardPage/:id' element={<CardPage />}></Route>
    </Routes>

  );
}

export default App;
