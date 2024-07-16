import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/info' element={<Info/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;