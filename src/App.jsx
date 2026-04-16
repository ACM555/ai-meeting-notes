import { Routes, Route } from 'react-router-dom';
import ShaderBackground from './components/ShaderBackground';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Features from './pages/Features';
import Demo from './pages/Demo';
import About from './pages/About';
import Help from './pages/Help';
import './App.css';

function App() {
  return (
    <div className="app">
      <ShaderBackground />
      <Navigation />
      <PageTransition>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}

export default App;
