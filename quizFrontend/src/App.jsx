import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/Footer';
import Auth from './components/Auth'
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () => {
  
  return (
    <Router>
       <Header />
       <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/auth" element={<Auth />}/>
           <Route path="/about" element={<About />}/>
           <Route path="/contact" element={<Contact />}/>
           <Route path="/login" element={<Login />}/>
       </Routes>
       <Footer />
    </Router>
  );
};

export default App;
