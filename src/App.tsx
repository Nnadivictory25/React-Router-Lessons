import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
// pages
import About from './pages/About';
import Home from './pages/Home';




function App() {
	return (
		<BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
		</BrowserRouter>
	);
}

export default App;
