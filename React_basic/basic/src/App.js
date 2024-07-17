import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import State from './pages/State';
import Param1 from './pages/Param1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
          <Route path='/state' element={<State/>}/>
          <Route path='/param/:id' element={<Param1/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;